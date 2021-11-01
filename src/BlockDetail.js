import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

import { Table, Pagination } from './components';
import { timeformat } from './util';

class BlockDtail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                height: 100,
                version: 0,
                hashPrevBlock: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                time: 123135,
                coinbase: '1MAdrZZ8BcPJAM2CYibKmrZoJP7AhpHBoY',
                stateRoot: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                transactionsRoot: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                receiptsRoot: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                gasLimit: 12313,
                gasUsed: 12313,
                bits: 123132,
                nonce: 1231321,
                transactions: [
                    {
                        hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        block: 0,
                        time: 1633689872,
                        from: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        to: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        value: 100,
                        fee: 100,
                    },
                    {
                        hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                        time: 1633689872,
                        from: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        to: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                        value: 100,
                        fee: 100,
                    },
                ]
            }
        }
    }
    componentDidMount() {
        const { history, location, match } = this.props;
        const { params } = match;
        console.log('match', params);
        if (!params.hash || !/^0x[0-9a-fA-F]{64}$/.test(params.hash)) {
            history.replace('/404');
        }
    }
    render() {
        return (
            <div>
                <h1 className="mb-4">
                    Block Detial
                </h1>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Block Height:
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex">
                                    {this.state.data.height}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Version:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.version}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Prev Block Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.hashPrevBlock}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.hash}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Time:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.time}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Coinbase:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.coinbase}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                State Root Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.stateRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Transactions Root Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.transactionsRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Receipts Root Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.receiptsRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Gas Limit:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.gasLimit}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Gas Used:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.gasUsed}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Bits:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.bits}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Nonce:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.nonce}
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="card">
                    <div className="card-header">
                        TRANSACTIONS
                    </div>
                    <div className="table-responsive">
                        <Table columns={[
                            {
                                field: 'hash', name: 'Tx Hash',
                                tdStyle: { maxWidth: '128px' },
                                render: (item) => {
                                    return (
                                        <div className="text-truncate">
                                            <a href="/blocks/1">
                                                {item.hash}
                                            </a>
                                        </div>
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
                                            <a href={`/blocks/${item.block}`}>
                                                {item.to}
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
                                            <a href={`/blocks/${item.block}`}>
                                                {item.to}
                                            </a>
                                        </div>
                                    );
                                }
                            },
                            { field: 'value', name: 'Value' },
                            { field: 'fee', name: 'Fee' },
                        ]} data={this.state.data.transactions} click={() => { }} >
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockDtail;