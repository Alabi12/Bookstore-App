import { Link } from 'react-router-dom';

const Navigate = () => (
  <header>
    <a href="/">
      <h3 className="title"> Bookstore CMS</h3>
    </a>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigate;
