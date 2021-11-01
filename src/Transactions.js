import qs from 'qs';
import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";
import { Table, Pagination } from './components';
import { timeformat } from './util';

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

function PageHolder(props) {
    let { pageSize, total } = props;
    pageSize = parseInt(pageSize);
    total = parseInt(total);
    let pn = parseInt(total / pageSize);
    let mod = total % pageSize;
    if (mod > 0) {
        pn += 1;
    }
    const location = useLocation();
    const history = useHistory();
    const { search } = location;
    const sq = qs.parse(search.replace(/^\?/, ''));
    let pageNum = sq['p'];
    if (!pageNum) {
        pageNum = 1;
    }
    pageNum = parseInt(pageNum);
    if (pageNum > pn) {
        history.replace('/404');
    }
    return (
        <div style={{ display: 'none' }}>
        </div>
    );
}
class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: [
                    {
                        hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        block: 0,
                        blockHash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        time: 1633689872,
                        from: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        to: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        value: 100,
                        fee: 100,
                    },
                    {
                        hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        block: 0,
                        blockHash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        time: 1633689872,
                        from: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        to: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        value: 100,
                        fee: 100,
                    },
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
                    pageSize={this.state.data.page.pageSize} />
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
                                field: 'block', name: 'Block',
                                tdStyle: { width: '6%' },
                                render: (item) => {
                                    return (
                                        <a href={`/blocks/${item.blockHash}`}>
                                            {item.block}
                                        </a>
                                    );
                                }
                            },
                            {
                                field: 'time', name: 'Time',
                                tdStyle: { width: '230px' },
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
                            { field: 'value', name: 'Value' },
                            { field: 'fee', name: 'Fee' },
                        ]} data={this.state.data.data} click={() => { }} >
                        </Table>
                    </div>
                    <div className="card-footer">
                        <PaginationWapper
                            pageSize={this.state.data.page.pageSize}
                            total={this.state.data.page.total} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Transactions;