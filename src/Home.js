import React from 'react';
import { Table } from './components';
import services from './services';
import { nowtimeformat, timeformat } from './util';
import { atto2base } from './util/xfslibutil';
const api = services.api;

function CoinNumberRender(props){
    const {value} = props;
    console.log(props);
    let number = atto2base(value);
    return (
        <span>
            {number} FIX
        </span>
    );
}
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
                // {
                //     bits: 4278190109,
                //     coinbase: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                //     gasLimit: "2500",
                //     gasUsed: "2500",
                //     hash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                //     hashPrevBlock: "0x00000068525708d49904196f76c43bc68b7e89ccea6a3fe70d7d7c1d60030460",
                //     height: 4,
                //     id: 5,
                //     nonce: 12775115,
                //     receiptsRoot: "0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d",
                //     stateRoot: "0x6276a8d1a3f0d30f3da1a54a61220e9ded316736390e4c58452fbdfc0f7fce8e",
                //     timestamp: 1635806005,
                //     transactionsRoot: "0xeba6126797231f4dd2fe666c1e8bd3e7ed4e32d2ee4d79da5ee1fb07a4a5f2f8",
                //     txCount: 1,
                //     version: 0,
                // },
            ],
            latestTxs: [
                // {
                //     blockHash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                //     blockHeight: 4,
                //     data: null,
                //     from: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                //     gasLimit: "2500",
                //     gasPrice: "100",
                //     hash: "0x3471a4a4845ea276e5b97a2b2d8d589fa7be35e15538dd00b46e563631407630",
                //     id: 1,
                //     nonce: 0,
                //     signature: "N5aUq+ExSGFuwsRD1u83UgrseeKrRSyBDO+w+asdmWwX8hUkpIibL0y8F4c91XZHuDjHOZ+Hdeel9WqzfLFuxQE=",
                //     timestamp: 1635805918,
                //     to: "nAxfgMYQacosjmGSn4xZmndWNoenCCNfn",
                //     value: "10000000000000000000",
                //     version: 0,
                // },
            ],
        }
    }
    async componentDidMount(){
        let st = await api.getStatus();
        console.log('status', st);
        let latest = await api.getLatest();
        const {blocks, txs} = latest;
        this.setState({latestBlocks: blocks, latestTxs: txs})
        // console.log('latest', latest);
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
                                        field: 'timestamp', name: 'Time',
                                        tdStyle: { width: '250px' },
                                         render: (item) => {
                                            let t = parseInt(item.timestamp);
                                            let datetime = new Date(t*1000);
                                            const timestr = timeformat(datetime);
                                            return (
                                                <span className="fs-6">
                                                    {timestr}
                                                </span>
                                            );
                                        }
                                    },
                                    {
                                        field: 'coinbase', name: 'Miner', 
                                        tdStyle: { maxWidth: '120px' },
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
                                        field: 'timestamp', name: 'Time',
                                        tdStyle: { width: '250px' },
                                        render: (item) => {
                                            let t = parseInt(item.timestamp);
                                            let datetime = new Date(t*1000);
                                            const timestr = timeformat(datetime);
                                            return (
                                                <span>
                                                    {timestr}
                                                </span>
                                            );
                                        }
                                    },
                                    { field: 'value', name: 'Value', render:  (item)=>{ 
                                        return CoinNumberRender({value: item.value})}},
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