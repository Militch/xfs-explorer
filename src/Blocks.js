import qs from 'qs';
import React from 'react';
import {
    useLocation,
    useHistory
  } from "react-router-dom";
import { Table,Pagination } from './components';
import { timeformat } from './util';

import services from './services';
const api = services.api;
function PaginationWapper(props) {
    let location = useLocation();
    const {total, pageSize} = props;
    const {search} = location;
    const sq = qs.parse(search.replace(/^\?/,''));
    let pageNum = sq['p'];
    if (!pageNum) {
        pageNum = 1;
    }
    return (
        <Pagination current={pageNum}
        pathname='/blocks'
        pageSize={pageSize} total={total}/>
    );
  }
  
class Blocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {
                pageSize: 20,
                total: 0
            },
            data: [
                {
                    bits: 4278190109,
                    coinbase: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasUsed: "2500",
                    hash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    hashPrevBlock: "0x00000068525708d49904196f76c43bc68b7e89ccea6a3fe70d7d7c1d60030460",
                    height: 4,
                    id: 5,
                    nonce: 12775115,
                    receiptsRoot: "0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d",
                    stateRoot: "0x6276a8d1a3f0d30f3da1a54a61220e9ded316736390e4c58452fbdfc0f7fce8e",
                    timestamp: 1635806005,
                    transactionsRoot: "0xeba6126797231f4dd2fe666c1e8bd3e7ed4e32d2ee4d79da5ee1fb07a4a5f2f8",
                    txCount: 1,
                    version: 0
                },
            ],
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
        let pagedata = await api.getBlocksByPage({params: {
            p: pageNum,
        }});
        const {total,records} = pagedata;
        let pageSize = this.state.page.pageSize;
        let pn = parseInt(total / pageSize);
        let mod = total % pageSize;
        if (mod > 0) {
            pn += 1;
        }
        if (pageNum > pn){
            // history.replace('/404');
            return;
        }
        this.setState({page: {total: total, 
            pageSize: pageSize}, 
            data: records});
    }
    render() {
        return (
            <div>
                <h1 className="mb-4">Blocks</h1>
                <div className="card">
                    <div className="table-responsive">
                        <Table columns={[
                            {
                                field: 'height', name: 'Height', 
                                tdStyle:{ width: '6%' },
                                render: (item) => {
                                    return (
                                        <a href={`/blocks/${item.hash}`}>
                                            {item.height}
                                        </a>
                                    );
                                }
                            },
                            {
                                field: 'hash', name: 'Hash', 
                                tdStyle:{ maxWidth: '128px' },
                                render: (item) => {
                                    return (
                                        <div className="text-truncate">
                                            <a href={`/blocks/${item.hash}`}>
                                                {item.hash}
                                            </a>
                                        </div>
                                    );
                                }
                            },
                            {
                                field: 'timestamp', name: 'Time',
                                tdStyle:{ width: '230px' },
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
                                field: 'coinbase', name: 'Miner',
                                tdStyle:{ maxWidth: '120px' },
                                 render: (item) => {
                                    return (
                                        <div className="text-truncate">
                                            <a href={`/address/${item.coinbase}`}>
                                                {item.coinbase}
                                            </a>
                                        </div>
                                    );
                                }
                            },
                            { field: 'txCount', name: 'Txs' },
                            { field: 'gasUsed', name: 'Gas Used',
                              render: (item)=>{
                                  return (
                                      <span>
                                          {item.gasUsed}
                                      </span>
                                  );
                              }},
                            { field: 'gasLimit', name: 'Gas Limit',
                            render: (item)=>{
                                return (
                                    <span>
                                        {item.gasLimit}
                                    </span>
                                );
                            }},
                            // { field: 'reward', name: 'Reward' },
                        ]} data={this.state.data} click={() => { }} >
                        </Table>
                    </div>
                    <div className="card-footer">
                        <PaginationWapper
                         pageSize={this.state.page.pageSize}
                         total={this.state.page.total}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Blocks;