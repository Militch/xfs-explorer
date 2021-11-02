import qs from 'qs';
import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";
import { Table, Pagination } from './components';
import { timeformat } from './util';
import services from './services';
import { atto2base } from './util/xfslibutil';
const api = services.api;
function PaginationWapper(props) {
    let location = useLocation();
    const { total, pageSize } = props;
    const { search } = location;
    const sq = qs.parse(search.replace(/^\?/, ''));
    let pageNum = sq['p'];
    if (!pageNum) {
        pageNum = 1;
    }
    return (
        <Pagination current={pageNum}
        pathname='/txs'
         pageSize={pageSize} total={total} />
    );
}
class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                // {
                //     blockHash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                //     blockHeight: 4,
                //     data: null,
                //     from: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                //     gasFee: "250000",
                //     gasLimit: "2500",
                //     gasPrice: "100",
                //     hash: "0x3471a4a4845ea276e5b97a2b2d8d589fa7be35e15538dd00b46e563631407630",
                //     id: 1,
                //     nonce: 0,
                //     signature: "N5aUq+ExSGFuwsRD1u83UgrseeKrRSyBDO+w+asdmWwX8hUkpIibL0y8F4c91XZHuDjHOZ+Hdeel9WqzfLFuxQE=",
                //     timestamp: 1635805918,
                //     to: "nAxfgMYQacosjmGSn4xZmndWNoenCCNfn",
                //     value: "10000000000000000000",             
                // },
            ],
            page: {
                pageSize: 20,
                total: 1022
            }
        }
    }
    async componentDidMount(){
        const { history, location } = this.props;
        const {search} = location;
        const sq = qs.parse(search.replace(/^\?/,''));
        let pageNum = sq['p'];
        if (!pageNum) {
            pageNum = 1;
        }
        pageNum = parseInt(pageNum);
        let pagedata = await api.getTransactionsByPage({params: {
            p: pageNum,
        }});
        console.log('pagedata', pagedata);
        const {total,records} = pagedata;
        let pageSize = this.state.page.pageSize;
        let pn = parseInt(total / pageSize);
        let mod = total % pageSize;
        if (mod > 0) {
            pn += 1;
        }
        if (pageNum > pn){
            history.replace('/404');
            return;
        }
        this.setState({page: {total: total, 
            pageSize: pageSize}, 
            data: records});
    }
    render() {
        return (
            <div>
                <h1 className="mb-4">
                    Transactions
                </h1>
                <div className="card">
                    <div className="table-responsive">
                        <Table columns={[
                            {
                                field: 'hash', name: 'Hash',
                                tdStyle: { maxWidth: '128px' },
                                render: (item) => {
                                    return (
                                        <div className="text-truncate">
                                            <a href={`/txs/${item.hash}`}>
                                                {item.hash}
                                            </a>
                                        </div>
                                    );
                                }
                            },
                            {
                                field: 'blockHeight', name: 'Block',
                                tdStyle: { width: '6%' },
                                render: (item) => {
                                    return (
                                        <a href={`/blocks/${item.blockHash}`}>
                                            {item.blockHeight}
                                        </a>
                                    );
                                }
                            },
                            {
                                field: 'timestamp', name: 'Time',
                                tdStyle: { width: '230px' },
                                render: (item) => {
                                    let time = parseInt(item.timestamp);
                                    const timestr = timeformat(new Date(time * 1000));
                                    return (
                                        <span className="fs-6">
                                            {timestr}
                                        </span>
                                    );
                                }
                            },
                            {
                                field: 'from', name: 'From',
                                tdStyle: { maxWidth: '120px' },
                                render: (item) => {
                                    return (
                                        <div className="text-truncate">
                                            <a href={`/address/${item.from}`}>
                                                {item.from}
                                            </a>
                                        </div>

                                    );
                                }
                            },
                            {
                                field: 'to', name: 'To',
                                tdStyle: { maxWidth: '120px' },
                                render: (item) => {
                                    return (
                                        <div className="text-truncate">
                                            <a href={`/address/${item.to}`}>
                                                {item.to}
                                            </a>
                                        </div>
                                    );
                                }
                            },
                            { field: 'value', name: 'Value', 
                            render: (item)=>{
                                let val = atto2base(item.value);
                                return (
                                    <span>
                                        {val} FIX
                                    </span>
                                );
                            } },
                            { field: 'gasFee', name: 'Fee',
                            render: (item)=>{
                                // let val = atto2base(item.value);
                                return (
                                    <span>
                                        {item.gasFee}
                                    </span>
                                );
                            } },
                        ]} data={this.state.data} click={() => { }} >
                        </Table>
                    </div>
                    <div className="card-footer">
                        <PaginationWapper
                            pageSize={this.state.page.pageSize}
                            total={this.state.page.total} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Transactions;