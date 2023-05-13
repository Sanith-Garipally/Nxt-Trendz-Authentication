import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-1">
      <img
        className="website-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <img
        className="logout-img"
        alt="nav logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
      />
      <ul className="nav-list-container">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <button className="logout-btn" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div className="header-2">
      <img
        className="nav-home"
        alt="nav home"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
      />
      <img
        className="nav-products"
        alt="nav products"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
      />
      <img
        className="nav-cart"
        alt="nav cart"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
      />
    </div>
  </div>
)

export default Header
