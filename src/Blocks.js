import qs from 'qs';
import React from 'react';
import {
    useLocation,
    useHistory
  } from "react-router-dom";
import { Table,Pagination } from './components';
import { timeformat } from './util';

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
  
function PageHolder(props) {
    let {pageSize,total} = props;
    pageSize = parseInt(pageSize);
    total = parseInt(total);
    let pn = parseInt(total / pageSize);
    let mod = total % pageSize;
    if (mod > 0) {
        pn += 1;
    }
    const location = useLocation();
    const history = useHistory();
    const {search} = location;
    const sq = qs.parse(search.replace(/^\?/,''));
    let pageNum = sq['p'];
    if (!pageNum) {
        pageNum = 1;
    }
    pageNum = parseInt(pageNum);
    if (pageNum > pn){
        history.replace('/404');
    }
    return (
        <div style={{display: 'none'}}>
        </div>
    );
}
class Blocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: [
                    {
                        height: 0,
                        hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        time: 1633689872,
                        miner: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        txcount: 120,
                        gasUsed: 123456,
                        gasLimit: 123456,
                        reward: 123456,
                    },
                    {
                        height: 0,
                        hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        time: 1633689872,
                        miner: '1MAdrZZ8BcPJAM2CYibKmrZoJP7AhpHBoY',
                        txcount: 120,
                        gasUsed: 123456,
                        gasLimit: 123456,
                        reward: 123456,
                    }
                ],
                page: {
                    pageSize: 20,
                    total: 1022
                }
            }
        }
    }
    render() {
        return (
            <div>
                <PageHolder total={this.state.data.page.total}
                 pageSize={this.state.data.page.pageSize}/>
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
                                field: 'time', name: 'Time',
                                tdStyle:{ width: '230px' },
                                render: (item) => {
                                    const timestr = timeformat(new Date(item.time * 1000));
                                    return (
                                        <span className="fs-6">
                                            {timestr}
                                        </span>
                                    );
                                }
                            },
                            {
                                field: 'miner', name: 'Miner',
                                tdStyle:{ maxWidth: '120px' },
                                 render: (item) => {
                                    return (
                                        <div className="text-truncate">
                                            <a href={`/address/${item.miner}`}>
                                                {item.miner}
                                            </a>
                                        </div>
                                    );
                                }
                            },
                            { field: 'txcount', name: 'Txs' },
                            { field: 'gasUsed', name: 'Gas Used' },
                            { field: 'gasLimit', name: 'Gas Limit' },
                            { field: 'reward', name: 'Reward' },
                        ]} data={this.state.data.data} click={() => { }} >
                        </Table>
                    </div>
                    <div className="card-footer">
                        <PaginationWapper
                         pageSize={this.state.data.page.pageSize}
                         total={this.state.data.page.total}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Blocks;