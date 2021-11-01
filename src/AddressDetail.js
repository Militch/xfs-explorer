import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

import { Table, Pagination } from './components';
import { timeformat } from './util';

class AddressDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                address: 'SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX',
                balance: '123132132',
                txs: 123
            },
            dataFormat: 'HEX'
        }
    }
    componentDidMount() {
        const { match } = this.props;
        const { params } = match;
        console.log('match', params);
    }
    render() {
        return (
            <div>
                <h1 className="mb-4">
                    Address Detial
                </h1>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Address:
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex">
                                    {this.state.data.address}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Balance:
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex">
                                    {this.state.data.balance}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-3">
                                Txs:
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex">
                                    {this.state.data.txs}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AddressDetail;