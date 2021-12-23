import qs from 'qs';
import React from 'react';
import {
    useLocation,
    useHistory
  } from "react-router-dom";
import { Table,Pagination } from './components';
import { timeformat } from './util';
import intl from 'react-intl-universal';
import services from './services';
const api = services.api;
function PaginationWapper(props) {
    let location = useLocation();
    const {total, pageSize} = props;
    const {search} = location;
    const sq = qs.parse(search.replace(/^\?/,''));
    let pageNum = sq['p'];
    if (!pageNum) {
        pageNum = 1;
    }
    return (
        <Pagination current={pageNum}
        pathname='/blocks'
        pageSize={pageSize} total={total}/>
    );
  }
  
class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            globalTdStyle: {
                fontSize:'1rem', 
                paddingTop: '1rem',
                paddingBottom: '1rem'  
            },
            page: {
                pageSize: 20,
                total: 0
            },
            data: [
                {
                    address: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    balance: '843513513',
                    nonce: 1,
                    stateRoot: '0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d',
                    type: 'EXTERNAL',
                    txs: 100
                },
                {
                    address: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    balance: '843513513',
                    nonce: 1,
                    stateRoot: '0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d',
                    type: 'EXTERNAL',
                    txs: 100
                },
                {
                    address: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    balance: '843513513',
                    nonce: 1,
                    stateRoot: '0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d',
                    type: 'EXTERNAL',
                    txs: 100
                },
                {
                    address: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    balance: '843513513',
                    nonce: 1,
                    stateRoot: '0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d',
                    type: 'CONTRACT',
                    txs: 100
                },
                {
                    address: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    balance: '843513513',
                    nonce: 1,
                    stateRoot: '0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d',
                    type: 'CONTRACT',
                    txs: 100
                },
                {
                    address: "kr2pG9kgFwtuXC549VewdnJrf1dR3ffd5",
                    balance: '843513513',
                    nonce: 1,
                    stateRoot: '0x622219c2714e14f0952131f181ca502788c294e65726f8674fc86118df918a4d',
                    type: 'CONTRACT',
                    txs: 100
                },
            ],
        }
    }
    async componentDidMount(){
        const { history, location } = this.props;
        const {search} = location;
        const sq = qs.parse(search.replace(/^\?/,''));
        let pageNum = sq['p'];
        if (!pageNum) {
            pageNum = 1;
        }
        pageNum = parseInt(pageNum);
        let pagedata = await api.getBlocksByPage({params: {
            p: pageNum,
        }});
        const {total,records} = pagedata;
        let pageSize = this.state.page.pageSize;
        let pn = parseInt(total / pageSize);
        let mod = total % pageSize;
        if (mod > 0) {
            pn += 1;
        }
        if (pageNum > pn){
            // history.replace('/404');
            return;
        }
        this.setState({page: {total: total, 
            pageSize: pageSize}, 
            data: records});
    }
    render() {
        return (
            <div>
                <h1 className="mb-4">
                    {intl.get('PAGE_TITLE_ACCOUNTS')}
                </h1>
                <div className="card">
                    <div className="table-responsive">
                        <Table columns={[
                            {
                                 name: intl.get('ACCOUNTS_ADDRESS'), 
                                tdStyle:{...this.state.globalTdStyle },
                                render: (item) => {
                                    return (
                                        <a href={`/address/${item.address}`}>
                                            {item.address}
                                        </a>
                                    );
                                }
                            },
                            {
                                 name: intl.get('ACCOUNTS_TYPE'), 
                                tdStyle:{...this.state.globalTdStyle, width: '120px' },
                                render: (item) => {
                                    return (
                                        <span>
                                            {intl.get(`ACCOUNT_DETAIL_TYPE_${item.type}`)}
                                        </span>
                                    );
                                }
                            },
                            {
                                 name: intl.get('ACCOUNTS_TXS'), 
                                thStyle: {textAlign:'right'},
                                tdStyle:{...this.state.globalTdStyle,textAlign:'right', width: '120px' },
                                render: (item) => {
                                    return (
                                        <span>
                                            {item.balance}
                                        </span>
                                    );
                                }
                            },
                            {
                                 name: intl.get('ACCOUNTS_BALANCE'), 
                                 thStyle: {textAlign:'right'},
                                tdStyle:{...this.state.globalTdStyle, width: '210px',textAlign:'right'},
                                render: (item) => {
                                    return (
                                        <span>
                                                {item.balance} 
                                                <span style={{
                                                fontSize: '.8rem',
                                            }}> XFSC</span>
                                            </span>
                                    );
                                }
                            },
                        ]} data={this.state.data} click={() => { }} >
                        </Table>
                    </div>
                    <div className="card-footer">
                        <PaginationWapper
                         pageSize={this.state.page.pageSize}
                         total={this.state.page.total}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Accounts;