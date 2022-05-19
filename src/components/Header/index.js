import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-logo"
    />
    <div className="nav-content-container">
      <ul className="list-container">
        <li className="list-item">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="/products" className="link">
            Products
          </Link>
        </li>
        <li className="list-item">
          <Link to="/cart" className="link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
