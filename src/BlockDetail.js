import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";
import intl from 'react-intl-universal';
import { Table, Pagination } from './components';
import { timeformat } from './util';
import services from './services';
import { atto2base } from './util/xfslibutil';
const api = services.api;
class BlockDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                header: {
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
                    version: 0,
                },
                transactions: [
                    
                ]
            }
        }
    }
    async componentDidMount() {
        const { history, location, match } = this.props;
        const { params } = match;
        // console.log('match', params);
        if (!params.hash || !/^0x[0-9a-fA-F]{64}$/.test(params.hash)) {
            // history.replace('/404');
            return;
        }
        try {
            const data = await api.getBlockByHash(params.hash);
            this.setState({data: data});
        }catch(e){
            // history.replace('/404');
            return;
        }
    }
    render() {
        let time = parseInt(this.state.data.header.timestamp);
        const timestr = timeformat(new Date(time * 1000));
        return (
            <div>
                <h1 className="mb-4">
                {intl.get('PAGE_TITLE_BLOCK_DETAIL')}&nbsp;#&nbsp;{this.state.data.header.height}
                </h1>
                <div className="card mb-4">
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_BLOCK_HEIGHT')}:
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex">
                                    {this.state.data.header.height}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                                {intl.get('BLOCK_DETAIL_VERSION')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.version}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_PREV_BLOCK_HASH')}:
                            </div>
                            <div className="col-md-10">
                                <a href={`/blocks/${this.state.data.header.hashPrevBlock}`}>
                                    {this.state.data.header.hashPrevBlock}
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_HASH')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.hash}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_TIME')}:
                            </div>
                            <div className="col-md-10">
                                {timestr}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_COINBASE')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.coinbase}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_STATE_ROOT_HASH')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.stateRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_TRANSACTIONS_ROOT_HASH')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.transactionsRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_RECEIPTS_ROOT_HASH')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.receiptsRoot}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_GAS_LIMIT')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.gasLimit}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_GAS_USED')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.gasUsed}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_BITS')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.bits}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('BLOCK_DETAIL_NONCE')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.header.nonce}
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
               
                <div className="card">
                    <div className="card-header">
                        {intl.get('BLOCK_DETAIL_TRANSACTIONS')}
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

export default BlockDetail;