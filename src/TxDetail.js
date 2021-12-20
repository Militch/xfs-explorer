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
class TXDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                blockHash: "0x0000006dcf1e68df26e04159e17bfc44a2ea1306f35a118ec7d3ca33e1ab939f",
                blockHeight: 4,
                data: null,
                from: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                gasFee: "250000",
                gasLimit: "2500",
                gasPrice: "100",
                gasUsed: "2500",
                hash: "0x3471a4a4845ea276e5b97a2b2d8d589fa7be35e15538dd00b46e563631407630",
                id: 1,
                nonce: 0,
                signature: "N5aUq+ExSGFuwsRD1u83UgrseeKrRSyBDO+w+asdmWwX8hUkpIibL0y8F4c91XZHuDjHOZ+Hdeel9WqzfLFuxQE=",
                status: 1,
                timestamp: 1635805918,
                to: "nAxfgMYQacosjmGSn4xZmndWNoenCCNfn",
                value: "10000000000000000000",
                version: 0,

            },
            dataFormat: 'HEX'
        }
    }
    async componentDidMount() {
        const { history, location, match } = this.props;
        const { params } = match;
        console.log('match', params);
        if (!params.hash || !/^0x[0-9a-fA-F]{64}$/.test(params.hash)) {
            // history.replace('/404');
        }
        // console.log(`data`, data);
        try {
            const data = await api.getTransactionByHash(params.hash);
            this.setState({data: data});
        }catch(e){
            // history.replace('/404');
            return;
        }
    }
    render() {
        let time = parseInt(this.state.data.timestamp);
        const timestr = timeformat(new Date(time * 1000));
        const valuestr = atto2base(this.state.data.value);
        let datastr = this.state.data.data || '';
        return (
            <div>
                <h1 className="mb-4">
                    Transaction Detial
                </h1>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Transaction Hash:
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex">
                                    {this.state.data.hash}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Status:
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex">
                                    {this.state.data.status}
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Block:
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex">
                                    <a href={`/blocks/${this.state.data.blockHash}`}>
                                        {this.state.data.blockHeight}
                                    </a>
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
                                From:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.from}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                To:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.to}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Value:
                            </div>
                            <div className="col-md-9">
                                {valuestr} FIX
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Gas Price:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.gasPrice} AttoFIX
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
                                Gas Fee:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.gasFee} AttoFIX
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
                    <div className="card-body">
                        <h5 className="card-title">Transaction Data</h5>
                        <div className="py-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio" id="dataFormatHEX"
                                    checked={this.state.dataFormat === 'HEX'}
                                    onChange={(e)=>{
                                        this.setState({dataFormat:'HEX'});
                                    }}
                                />
                                <label className="form-check-label" htmlFor="dataFormatHEX">
                                    HEX
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio" id="dataFormatASCII"
                                    checked={this.state.dataFormat === 'ASCII'}
                                    onChange={(e)=>{
                                        this.setState({dataFormat:'ASCII'});
                                    }}
                                />
                                <label className="form-check-label" htmlFor="dataFormatASCII">
                                    ASCII
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio" id="dataFormatUTF8"
                                    checked={this.state.dataFormat === 'UTF8'}
                                    onChange={(e)=>{
                                        this.setState({dataFormat:'UTF8'});
                                    }}
                                />
                                <label className="form-check-label" htmlFor="dataFormatUTF8">
                                    UTF8
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio" id="dataFormatJSON"
                                    checked={this.state.dataFormat === 'JSON'}
                                    onChange={(e)=>{
                                        this.setState({dataFormat:'JSON'});
                                    }}
                                />
                                <label className="form-check-label" htmlFor="dataFormatJSON">
                                    JSON
                                </label>
                            </div>
                        </div>
                        <div>
                            <textarea
                                className="form-control"
                                rows="3"
                                readOnly
                                value={datastr}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TXDetail;