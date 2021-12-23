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
class AccountDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            globalTdStyle: {
                fontSize:'1rem', 
                paddingTop: '1rem',
                paddingBottom: '1rem'  
            },
            data: {
                account: {
                    address: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    balance: '843513513',
                    nonce: 1,
                    stateRoot: '0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d',
                    type: 'EXTERNAL',
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
        // let time = parseInt(this.state.data.header.timestamp);
        // const timestr = timeformat(new Date(time * 1000));
        const timestr = 'timeformat(new Date(time * 1000))';
        return (
            <div>
                <h1 className="mb-4">
                {intl.get('PAGE_TITLE_ACCOUNT_DETAIL')}
                </h1>
                <div className="card mb-4">
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('ACCOUNT_DETAIL_ADDRESS')}:
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex">
                                    {this.state.data.account.address}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                                {intl.get('ACCOUNT_DETAIL_BALANCE')}:
                            </div>
                            <div className="col-md-10">
                                {this.state.data.account.balance}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                                {intl.get('ACCOUNT_DETAIL_TYPE')}:
                            </div>
                            <div className="col-md-10">
                                {intl.get(`ACCOUNT_DETAIL_TYPE_${this.state.data.account.type}`)}
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                                {intl.get('ACCOUNT_DETAIL_NONCE')}:
                            </div>
                            <div className="col-md-10">
                                12
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('ACCOUNT_DETAIL_CREATER')}:
                            </div>
                            <div className="col-md-10">
                                <a href={`/accounts/${this.state.data.account.address}`}>
                                    {this.state.data.account.address}
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row">
                            <div className="col-md-2">
                            {intl.get('ACCOUNT_DETAIL_STATE_ROOT')}:
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex">
                                    {this.state.data.account.address}
                                </div>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="card mb-4 d-none">
                        <div className="card-body">
                         <h5 className="card-title">
                            {intl.get('ACCOUNT_DETAIL_CONTRACT_CODE')}
                         </h5>
                         
                        <div>
                            <textarea
                                className="form-control"
                                rows="3"
                                readOnly
                                value={''}></textarea>
                        </div>
                        </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        {intl.get('ACCOUNT_DETAIL_TRANSACTIONS')}
                    </div>
                    <div className="table-responsive">
                        <Table columns={[
                            {
                                field: 'hash', name: intl.get('ACCOUNT_DETAIL_TRANSACTIONS_HASH'),
                                tdStyle: {...this.state.globalTdStyle, maxWidth: '128px' },
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
                                field: 'from', name: intl.get('ACCOUNT_DETAIL_TRANSACTIONS_FROM'),
                                tdStyle: {...this.state.globalTdStyle, maxWidth: '120px' },
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
                                field: 'to', name: intl.get('ACCOUNT_DETAIL_TRANSACTIONS_TO'),
                                tdStyle: {...this.state.globalTdStyle, maxWidth: '120px' },
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
                            { field: 'value', name: intl.get('ACCOUNT_DETAIL_TRANSACTIONS_VALUE'), 
                            thStyle: {textAlign:'right'},
                            tdStyle: {...this.state.globalTdStyle, textAlign:'right'},
                            render: (item)=>{
                                let val = atto2base(item.value);
                                return (
                                    <span>
                                                {val} 
                                                <span style={{
                                                fontSize: '.8rem',
                                            }}> XFSC</span>
                                            </span>
                                );
                            } },
                            { field: 'gasFee', name: intl.get('ACCOUNT_DETAIL_TRANSACTIONS_GAS_FEE'),
                            thStyle: {textAlign:'right'},
                            tdStyle: {...this.state.globalTdStyle, textAlign:'right'},
                            render: (item)=>{
                                // let val = atto2base(item.value);
                                return (
                                    <span>
                                                {item.gasFee} 
                                                <span style={{
                                                fontSize: '.8rem',
                                            }}> XFSC</span>
                                            </span>
                                );
                            } },
                        ]} data={this.state.data.transactions} click={() => { }} >
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountDetail;