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
class BlockDtail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                header: {
                    // bits: 4278190109,
                    // coinbase: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    // gasLimit: "2500",
                    // gasUsed: "2500",
                    // hash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    // hashPrevBlock: "0x00000068525708d49904196f76c43bc68b7e89ccea6a3fe70d7d7c1d60030460",
                    // height: 4,
                    // id: 5,
                    // nonce: 12775115,
                    // receiptsRoot: "0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d",
                    // stateRoot: "0x6276a8d1a3f0d30f3da1a54a61220e9ded316736390e4c58452fbdfc0f7fce8e",
                    // timestamp: 1635806005,
                    // transactionsRoot: "0xeba6126797231f4dd2fe666c1e8bd3e7ed4e32d2ee4d79da5ee1fb07a4a5f2f8",
                    // txCount: 1,
                    // version: 0,
                },
                transactions: [
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
                    //     version: 0,
                    // },
                ]
            }
        }
    }
    async componentDidMount() {
        const { history, location, match } = this.props;
        const { params } = match;
        // console.log('match', params);
        if (!params.hash || !/^0x[0-9a-fA-F]{64}$/.test(params.hash)) {
            history.replace('/404');
        }
        const data = await api.getBlockByHash(params.hash);
        this.setState({data: data});
        console.log(data);

    }
    render() {
        let time = parseInt(this.state.data.header.timestamp);
        const timestr = timeformat(new Date(time * 1000));
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
                                    {this.state.data.header.height}
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
                                {this.state.data.header.version}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Prev Block Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.hashPrevBlock}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.hash}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Time:
                            </div>
                            <div className="col-md-9">
                                {timestr}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Coinbase:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.coinbase}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                State Root Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.stateRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Transactions Root Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.transactionsRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Receipts Root Hash:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.receiptsRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Gas Limit:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.gasLimit}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Gas Used:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.gasUsed}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Bits:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.bits}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Nonce:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.header.nonce}
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
                                            <a href={`/txs/${item.hash}`}>
                                                {item.hash}
                                            </a>
                                        </div>
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
                            }  },
                            { field: 'gasFee', name: 'Fee' },
                        ]} data={this.state.data.transactions} click={() => { }} >
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockDtail;