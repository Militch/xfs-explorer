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
            ]
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
                                        field: 'height', name: 'Height', render: (item) => {
                                            return (
                                                <a href={`/blocks/${item.hash}`}>
                                                    {item.height}
                                                </a>
                                            );
                                        }
                                    },
                                    {
                                        field: 'time', name: 'Time', render: (item) => {
                                            const timestr = nowtimeformat(item.time, new Date());
                                            return (
                                                <span class="fs-6">
                                                    {timestr}
                                                </span>
                                            );
                                        }
                                    },
                                    {
                                        field: 'miner', name: 'Miner', render: (item) => {
                                            return (
                                                <a href={`/addr/${item.miner}`}>
                                                    {item.miner}
                                                </a>
                                            );
                                        }
                                    },
                                    { field: 'txs', name: 'Txs' },
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
                                        field: 'hash', name: 'TX HASH', render: (item) => {
                                            return (
                                                <a href={`/txs/${item.hash}`}>
                                                    {item.hash}
                                                </a>
                                            );
                                        }
                                    },
                                    {
                                        field: 'time', name: 'Time', render: (item) => {
                                            const timestr = nowtimeformat(item.time, new Date());
                                            return (
                                                <span class="fs-6">
                                                    {timestr}
                                                </span>
                                            );
                                        }
                                    },
                                    { field: 'value', name: 'Value', },
                                ]} data={[]} click={() => { }} >
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