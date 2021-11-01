import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

import { Table, Pagination } from './components';
import { timeformat } from './util';

class TXDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                version: 0,
                hash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                block: 100,
                blockHash: '0x00001989001b007f2fad2d01721d6f8f03a8dd39507a20a46d0a6baf4ca9e1dd',
                time: 1633689872,
                from: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                to: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                status: 1,
                value: 100,
                fee: 100,
                nonce: 100,
                gasPrice: 100,
                gasLimit: 100,
                gasUsed: 1000,
                data: 'abc'
            },
            dataFormat: 'HEX'
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
                                    {this.state.data.block}
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
                                {this.state.data.time}
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
                                {this.state.data.value}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Gas Price:
                            </div>
                            <div className="col-md-9">
                                {this.state.data.gasPrice}
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
                                value={this.state.data.data}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TXDetail;