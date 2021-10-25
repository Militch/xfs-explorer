import React from 'react';

class Blocks extends React.Component {
    
    render() {
        return (
            <div>
                <h1 className="mb-4">Blocks</h1>
                <div className="card">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Height</th>
                                    <th>Hash</th>
                                    <th>Time</th>
                                    <th>Miner</th>
                                    <th>Txs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/blocks/1">
                                            1
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-truncate" style={{ maxWidth: '240px' }}>
                                            <a href="/blocks/1">
                                                0x01f1f201f1f201f1f201f1f201f1f201f1f201f1f201f1f2f2f2f2f2f2f2f2
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="fs-6">
                                            20 min ago
                                        </span>
                                    </td>
                                    <td>
                                        <div className="text-truncate">
                                            <a href="/addr/">
                                                SskJje8fVgAdu4Xyuv6Qw7exQPJ4LYWWX
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        10
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer d-flex align-items-center">
                        <p className="m-0 text-muted">
                            Showing
                            <span> 0 </span> to <span> 100 </span> of
                            <span> 100 </span> entries
                        </p>
                        <ul className="pagination m-0 ms-auto">
                            <li className="page-item disabled">
                                <a className="page-link" href="/blocks?p=0">
                                    First
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="/blocks?p=<%= data.page.prevpage %>">
                                    <span>&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item disabled">
                                <span className="page-link">
                                    <span>Page 1</span>
                                </span>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="/blocks?p=<%= data.page.nextpage %>">
                                    <span>&raquo;</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="/blocks?p=<%= data.page.totalpage %>">
                                    Last
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Blocks;