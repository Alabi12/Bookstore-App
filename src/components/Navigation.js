import { Link } from 'react-router-dom';

const Navigate = () => (
  <header className="head">
    <nav className="head-nav">
      <a className="nav-a" href="/">
        <h3 className="title"> Bookstore CMS</h3>
      </a>
      <ul className="head-ul">
        <li className="head-li">
          <Link className="head-a" to="/">
            Home
          </Link>
        </li>
        <li className="head-li">
          <Link className="head-a light-a" to="/categories">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
    <i className="fa-regular fa-circle-user fa-2x user-icon" />
  </header>
);

export default Navigate;
