import logo from './logo.svg';
import iconJustify from './icons/justify.svg';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Home';

import Blocks from './Blocks';
import Transactions from './Transactions';
import BlockDetial from './BlockDetail';
import TxDetail from './TxDetail';
import AddressDetail from './AddressDetail';
import classNames from 'classnames';
import ErrorPage from './404';


function NavLink(props) {
  let location = useLocation();
  let { href } = props;
  let { pathname } = location;
  let hrefmatch = () => {
    return (href && href !== '/' && pathname.startsWith(href))
      || (href === '/' && pathname === href);
  }
  let classnames = classNames(
    {
      [`text-white`]: hrefmatch(),
      [`text-white-50`]: !hrefmatch(),
    }, 'nav-link', 'px-2'
  )
  return (
    <a href={href} className={classnames}>
      {props.children}
    </a>
  );
}


function NavItem({ href, children, ...props }) {
  let location = useLocation();
  let { pathname } = location;
  let hrefmatch = () => {
    return (href && href !== '/' && pathname.startsWith(href))
      || (href === '/' && pathname === href);
  }
  let classnames = classNames(
    {
      [`active`]: hrefmatch(),
    }, 'nav-item'
  )
  return (
    <li className={classnames}>
      <a className="nav-link" href={href}>
        <span className="nav-link-title">
          {children}
        </span>
      </a>
    </li>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: '/',
      showMNav: false,
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const appBarClassNames = classNames({
      [``]: true
    }, 'app-bar', 'mb-2 mb-lg-0');
    const btnClassNames = classNames({
      [``]: true
    }, 'btn btn-link app-menu-btn app-bar-btn-none');
    const navClassNames = classNames({
      [`nav-m-show`]: this.state.showMNav
    }, 'nav col-12 col-lg-auto me-lg-auto mb-2 mb-lg-0', 'nav-lg', 'nav-m');
    const searchBarClassNames = classNames({
      [`search-m-show`]: this.state.showMNav
    }, 'col-12 col-lg-auto mb-2 mb-lg-0 search-m');
    return (
      <Router>
        <header className="py-3 bg-dark text-white mb-4">
          <div className="container">
            {/* d-flex flex-wrap align-items-center */}
            <div className={appBarClassNames}>
              <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                <img src={logo} className='app-logo app-logo-lg' alt='app-logo' />
              </a>
              <button className={btnClassNames} onClick={() => {
                this.setState({ showMNav: !this.state.showMNav });
              }}>
                <img src={iconJustify} className='menu-icon' alt='app-menu' />
              </button>
              <ul className={navClassNames}>
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
                <li>
                  <NavLink href="/accounts">
                    Accounts
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/tokens">
                    Tokens
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/nfts">
                    NTFs
                  </NavLink>
                </li>
              </ul>
              <form className={searchBarClassNames}>
                <input type="search" className="form-control form-control-dark" placeholder="Search..." />
              </form>
            </div>
          </div>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/blocks" component={Blocks}>
            </Route>
            <Route path="/blocks/:hash" component={BlockDetial}>
            </Route>
            <Route exact path="/txs" component={Transactions}>
            </Route>
            <Route path="/txs/:hash" component={TxDetail}>
            </Route>
            <Route path="/address/:addr" component={AddressDetail}>
            </Route>
            <Route path="/404" component={ErrorPage}>
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
