import React from 'react';
import { Table } from './components';
import intl from 'react-intl-universal';
import services from './services';
import { nowtimeformat, timeformat } from './util';
import { atto2base } from './util/xfslibutil';
import Chart from "react-apexcharts";
const api = services.api;

function CoinNumberRender(props) {
    const { value } = props;
    console.log(props);
    let number = atto2base(value);
    return (
        <span>
            {number} FIX
        </span>
    );
}

function splitAndEllipsisAddress(address, len=5){
    let start = address.substring(0, len);
    let last = address.substring(address.length, address.length-len);
    return [start,'...', last].join('');
}
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                latestHeight: '251,321',
                blockReward: '17.00',
                difficulty: '1,321',
                transactions: '1,251,321',
                hashRate: '231',
                accounts: '1,321',
                blocks: '15,456',
                blockTime: '3',
            },
            globalTdStyle: {
                fontSize:'1rem', 
                paddingTop: '1rem',
                paddingBottom: '1rem'  
            },
            options: {
                chart: {

                    id: "basic-bar",
                    animations: {
                        enabled: false
                    },
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    }
                },
                xaxis: {
                    categories: ['11-15', '12-16', '12-17', '12-18', '12-19', '12-20', '12-21'],
                    labels: {
                        padding: 0,
                    },
                    tooltip: {
                        enabled: false
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    opacity: .16,
                    type: 'solid'
                },
                stroke: {
                    width: 2,
                    lineCap: "round",
                    curve: "smooth",
                },
                colors: ["#206bc4"],
                legend: {
                    show: false,
                },
                grid: {
                    show: true,
                },
            },
            series: [
                {
                    name: "Volume",
                    data: [30, 40, 45, 50, 49, 60, 70]
                }
            ],
            latestBlocks: [
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
                    version: 0,
                    reward: '12',
                },
                {
                    bits: 4278190109,
                    coinbase: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasUsed: "2500",
                    hash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    hashPrevBlock: "0x00000068525708d49904196f76c43bc68b7e89ccea6a3fe70d7d7c1d60030460",
                    height: 3,
                    id: 5,
                    nonce: 12775115,
                    receiptsRoot: "0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d",
                    stateRoot: "0x6276a8d1a3f0d30f3da1a54a61220e9ded316736390e4c58452fbdfc0f7fce8e",
                    timestamp: 1635806005,
                    transactionsRoot: "0xeba6126797231f4dd2fe666c1e8bd3e7ed4e32d2ee4d79da5ee1fb07a4a5f2f8",
                    txCount: 1,
                    version: 0,
                    reward: '12',
                },
                {
                    bits: 4278190109,
                    coinbase: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasUsed: "2500",
                    hash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    hashPrevBlock: "0x00000068525708d49904196f76c43bc68b7e89ccea6a3fe70d7d7c1d60030460",
                    height: 2,
                    id: 5,
                    nonce: 12775115,
                    receiptsRoot: "0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d",
                    stateRoot: "0x6276a8d1a3f0d30f3da1a54a61220e9ded316736390e4c58452fbdfc0f7fce8e",
                    timestamp: 1635806005,
                    transactionsRoot: "0xeba6126797231f4dd2fe666c1e8bd3e7ed4e32d2ee4d79da5ee1fb07a4a5f2f8",
                    txCount: 1,
                    version: 0,
                    reward: '12',
                },
                {
                    bits: 4278190109,
                    coinbase: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasUsed: "2500",
                    hash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    hashPrevBlock: "0x00000068525708d49904196f76c43bc68b7e89ccea6a3fe70d7d7c1d60030460",
                    height: 1,
                    id: 5,
                    nonce: 12775115,
                    receiptsRoot: "0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d",
                    stateRoot: "0x6276a8d1a3f0d30f3da1a54a61220e9ded316736390e4c58452fbdfc0f7fce8e",
                    timestamp: 1635806005,
                    transactionsRoot: "0xeba6126797231f4dd2fe666c1e8bd3e7ed4e32d2ee4d79da5ee1fb07a4a5f2f8",
                    txCount: 1,
                    version: 0,
                    reward: '12.12021',
                },
            ],
            latestTxs: [
                {
                    blockHash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    blockHeight: 4,
                    data: null,
                    from: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasPrice: "100",
                    hash: "0x3471a4a4845ea276e5b97a2b2d8d589fa7be35e15538dd00b46e563631407630",
                    id: 1,
                    nonce: 0,
                    signature: "N5aUq+ExSGFuwsRD1u83UgrseeKrRSyBDO+w+asdmWwX8hUkpIibL0y8F4c91XZHuDjHOZ+Hdeel9WqzfLFuxQE=",
                    timestamp: 1635805918,
                    to: "nAxfgMYQacosjmGSn4xZmndWNoenCCNfn",
                    value: "10000000000000000000",
                    version: 0,
                },
                {
                    blockHash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    blockHeight: 4,
                    data: null,
                    from: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasPrice: "100",
                    hash: "0x3471a4a4845ea276e5b97a2b2d8d589fa7be35e15538dd00b46e563631407630",
                    id: 1,
                    nonce: 0,
                    signature: "N5aUq+ExSGFuwsRD1u83UgrseeKrRSyBDO+w+asdmWwX8hUkpIibL0y8F4c91XZHuDjHOZ+Hdeel9WqzfLFuxQE=",
                    timestamp: 1635805918,
                    to: "nAxfgMYQacosjmGSn4xZmndWNoenCCNfn",
                    value: "10000000000000000000",
                    version: 0,
                },
                {
                    blockHash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    blockHeight: 4,
                    data: null,
                    from: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasPrice: "100",
                    hash: "0x3471a4a4845ea276e5b97a2b2d8d589fa7be35e15538dd00b46e563631407630",
                    id: 1,
                    nonce: 0,
                    signature: "N5aUq+ExSGFuwsRD1u83UgrseeKrRSyBDO+w+asdmWwX8hUkpIibL0y8F4c91XZHuDjHOZ+Hdeel9WqzfLFuxQE=",
                    timestamp: 1635805918,
                    to: "nAxfgMYQacosjmGSn4xZmndWNoenCCNfn",
                    value: "10000000000000000000",
                    version: 0,
                },
                {
                    blockHash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                    blockHeight: 4,
                    data: null,
                    from: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    gasLimit: "2500",
                    gasPrice: "100",
                    hash: "0x3471a4a4845ea276e5b97a2b2d8d589fa7be35e15538dd00b46e563631407630",
                    id: 1,
                    nonce: 0,
                    signature: "N5aUq+ExSGFuwsRD1u83UgrseeKrRSyBDO+w+asdmWwX8hUkpIibL0y8F4c91XZHuDjHOZ+Hdeel9WqzfLFuxQE=",
                    timestamp: 1635805918,
                    to: "nAxfgMYQacosjmGSn4xZmndWNoenCCNfn",
                    value: "10000000000000000000",
                    version: 0,
                },
            ],
        }
    }
    async componentDidMount() {
        // let st = await api.getStatus();
        // console.log('status', st);
        // let latest = await api.getLatest();
        // const { blocks, txs } = latest;
        // this.setState({ latestBlocks: blocks, latestTxs: txs });
        // a := new ApexCharts(document.getElementById('chart-demo-line'));
        // console.log('latest', latest);
    }
    render() {
        return (
            <div>
                <div className="row mb-4">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {intl.get('HOME_STATE_LATEST_HEIGHT')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.latestHeight}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_TRANSACTIONS')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.transactions}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_DIFFICULTY')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.difficulty}
                                            <span style={{
                                                fontSize: '18px',
                                            }}> T</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_POWER')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.hashRate}
                                            <span style={{
                                                fontSize: '18px',
                                            }}> T / S</span>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_ACCOUNTS')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.accounts}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_AVG_BLOCK_TIME')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.blockTime}
                                            <span style={{
                                                fontSize: '18px',
                                            }}> Sec</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_AVG_BLOCK_REWARD')}
                                            </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.blockReward}
                                            <span style={{
                                                fontSize: '18px',
                                            }}> XFSC</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_AVG_TXS_IN_BLOCKS')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.blocks}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {intl.get('HOME_STATE_TXS_PRE_SECOND')}
                                        </h5>
                                        <p className="card-text" style={{
                                            fontSize: '26px',
                                            fontWeight: 400,
                                        }}>
                                            {this.state.status.blocks}
                                            <span style={{
                                                fontSize: '18px',
                                            }}> TXS / S</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card" style={{
                            height: '365.406px'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title">
                                {intl.get('HOME_TRANSACTION_HISTORY_IN_7_DAYS')}
                                </h5>
                                <Chart
                                    type="area"
                                    className={'chart-lg'}
                                    height="280px"
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <div className="card">
                            <div className="card-header">
                                <span style={{
                                    verticalAlign: 'middle'
                                }}>{intl.get('HOME_LATEST_BLOCKS')}</span>
                                <span className="ms-auto">
                                    <a href="/blocks" >
                                    {intl.get('HOME_VIEW_ALL')}
                                    </a>
                                </span>
                            </div>
                            <div className="table-responsive">
                                <Table columns={[
                                    {
                                        field: 'height', name: intl.get('HOME_LATEST_BLOCKS_HEIGHT'),
                                        tdStyle: { width: '60px', ...this.state.globalTdStyle},
                                        thStyle: {},
                                        render: (item) => {
                                            return (
                                                <a href={`/blocks/${item.hash}`}>
                                                    {item.height}
                                                </a>
                                            );
                                        }
                                    },
                                    {
                                        field: 'timestamp', name: intl.get('HOME_LATEST_BLOCKS_TIME'),
                                        tdStyle: { width: '250px', ...this.state.globalTdStyle },
                                        render: (item) => {
                                            let t = parseInt(item.timestamp);
                                            let datetime = new Date(t * 1000);
                                            const timestr = timeformat(datetime);
                                            return (
                                                <span className="fs-6">
                                                    {timestr}
                                                </span>
                                            );
                                        }
                                    },
                                    {
                                        field: 'coinbase', name: intl.get('HOME_LATEST_BLOCKS_MINER'),
                                        tdStyle: { maxWidth: '120px', ...this.state.globalTdStyle},
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
                                    { field: 'txCount', name: intl.get('HOME_LATEST_BLOCKS_TXS'), 
                                    tdStyle: { ...this.state.globalTdStyle }, },
                                    { field: 'reward', name: intl.get('HOME_LATEST_BLOCKS_REWARD'), 
                                    thStyle: {textAlign: 'right'},
                                    tdStyle: { textAlign: 'right', ...this.state.globalTdStyle  },
                                    render: (item) => {
                                        return (
                                            <span>
                                                {item.reward} 
                                                <span style={{
                                                fontSize: '.8rem',
                                            }}> XFSC</span>
                                            </span>
                                        );
                                    }
                                 },
                                ]} data={this.state.latestBlocks} click={() => { }} >
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="card">
                            <div className="card-header">
                                <span style={{ verticalAlign: 'middle' }}>{intl.get('HOME_LATEST_TRANSACTIONS')}</span>
                                <span className="ms-auto">
                                    <a href="/txs" >
                                    {intl.get('HOME_VIEW_ALL')}
                                    </a>
                                </span>
                            </div>
                            <div className="table-responsive">
                                <Table columns={[
                                    {
                                        field: 'hash', name: intl.get('HOME_LATEST_TRANSACTIONS_HASH'),
                                        tdStyle: { maxWidth: '240px',...this.state.globalTdStyle },
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
                                        name: intl.get('HOME_LATEST_TRANSACTIONS_ADDRESS'),
                                        tdStyle: { ...this.state.globalTdStyle },
                                        render: (item) => {
                                            let fromAddr = splitAndEllipsisAddress(item.from);
                                            let toAddress = splitAndEllipsisAddress(item.to);
                                            return (
                                                <span>
                                                    <a href={`/txs/${item.hash}`}>
                                                            {fromAddr}
                                                        </a>&nbsp;&raquo;&nbsp;
                                                        <a href={`/txs/${item.hash}`}>
                                                            {toAddress}
                                                        </a>
                                                </span>
                                            );
                                        }
                                    },
                                    {
                                        field: 'value', name: intl.get('HOME_LATEST_TRANSACTIONS_VALUE'), 
                                        thStyle: {textAlign: 'right'},
                                        tdStyle: {...this.state.globalTdStyle, textAlign: 'right'},
                                        render: (item) => {
                                            let number = atto2base(item.value);
                                            return (
                                                <span>
                                                {number} 
                                                <span style={{
                                                fontSize: '.8rem',
                                            }}> XFSC</span>
                                            </span>
                                            )
                                        }
                                    },
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