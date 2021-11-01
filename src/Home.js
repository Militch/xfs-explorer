import React from 'react';
import { Table } from './components';
import { nowtimeformat } from './util';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                latestHeight: 1,
                blockReward: 0,
                difficulty: 0
            },
            latestBlocks: [
                {
                    height: 0,
                    time: 12456,
                    miner: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                    txcount: 120
                },
                {
                    height: 0,
                    time: 12456,
                    miner: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                    txcount: 120
                },
                {
                    height: 0,
                    time: 12456,
                    miner: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                    txcount: 120
                }
            ],
            latestTxs: [
                {
                    hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                    time: 1633689872,
                    value: 100,
                    fee: 300
                },
                {
                    hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                    time: 1633689872,
                    value: 100,
                    fee: 300
                },
                {
                    hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                    time: 1633689872,
                    value: 100,
                    fee: 300
                },
            ],
        }
    }
    render() {
        return (
            <div>
                <div className="row mb-4">
                    <div className="col-md-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Latest Height
                                </h5>
                                <p className="card-text">
                                    {this.state.status.latestHeight}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Block Reward</h5>
                                <p className="card-text">
                                    {this.state.status.blockReward} XFSC
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Difficulty</h5>
                                <p className="card-text">
                                    {this.state.status.difficulty} H
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <span style={{
                                    verticalAlign: 'middle'
                                }}>LATEST BLOCKS</span>
                                <span style={{
                                    float: 'right',
                                }}>
                                    <a href="/blocks" >
                                        View All
                                    </a>
                                </span>
                            </div>
                            <div className="table-responsive p-2">
                                <Table columns={[
                                    {
                                        field: 'height', name: 'Height',
                                        tdStyle: { width: '6%' },
                                        render: (item) => {
                                            return (
                                                <a href={`/blocks/${item.hash}`}>
                                                    {item.height}
                                                </a>
                                            );
                                        }
                                    },
                                    {
                                        field: 'time', name: 'Time',
                                        tdStyle: { width: '250px' },
                                         render: (item) => {
                                            const timestr = nowtimeformat(item.time, new Date());
                                            return (
                                                <span className="fs-6">
                                                    {timestr}
                                                </span>
                                            );
                                        }
                                    },
                                    {
                                        field: 'miner', name: 'Miner', 
                                        tdStyle: { maxWidth: '120px' },
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
                                ]} data={this.state.latestBlocks} click={() => { }} >
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <span style={{ verticalAlign: 'middle' }}>LATEST TRANSACTIONS</span>
                                <span style={{ float: 'right' }}>
                                    <a href="/txs" >
                                        View All
                                    </a>
                                </span>
                            </div>
                            <div className="table-responsive p-2">
                                <Table columns={[
                                    {
                                        field: 'hash', name: 'TX HASH',
                                        tdStyle: { maxWidth: '50px' },
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
                                        field: 'time', name: 'Time',
                                        tdStyle: { width: '250px' },
                                        render: (item) => {
                                            const timestr = nowtimeformat(item.time, new Date());
                                            return (
                                                <span className="fs-6">
                                                    {timestr}
                                                </span>
                                            );
                                        }
                                    },
                                    { field: 'value', name: 'Value', },
                                    { field: 'fee', name: 'Fee', },
                                ]} data={this.state.latestTxs} click={() => { }} >
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;