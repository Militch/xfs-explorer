import logo from './logo.svg';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Home';

import Blocks from './Blocks';
import Txs from './Txs';
import classNames from 'classnames';


function NavLink(props) {
  let location = useLocation();
  const {href} = props;
  const {pathname} = location;
  let classnames = classNames(
    {
      [`text-white`]: pathname === href,
      [`text-white-50`]: pathname !== href,
    }, 'nav-link', 'px-2'
  )
  return (
    <a href={href} className={classnames}>
      {props.children}
    </a>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: '/'
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Router>
        <header className="p-3 bg-dark text-white mb-4">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img src={logo} className='app-logo' alt='app-logo' />
              </a>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-5">
                <li>
                  <NavLink href="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/blocks">
                    Blocks
                  </NavLink>
                </li>
                <li>
                <NavLink href="/txs">
                  Transactions
                </NavLink>
                </li>
              </ul>
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..."/>
              </form>
            </div>
          </div>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/blocks" component={Blocks}>
            </Route>
            <Route path="/txs" component={Txs}>
            </Route>
          </Switch>
        </main>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">© 2021 Starx Labs, Inc</p>
            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="/blocks" className="nav-link px-2 text-muted">Blocks</a></li>
              <li className="nav-item"><a href="/txs" className="nav-link px-2 text-muted">Transactions</a></li>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
