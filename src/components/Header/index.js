import './index.css'

const Header = () => (
  <>
    <div className="desktop-view">
      <nav className="nav-header">
        <div className="nav-content">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <ul className="nav-menu">
            <li className="nav-link">Home</li>
            <li className="nav-link">Products</li>
            <li className="nav-link">Cart</li>
          </ul>
          <button type="button" className="logout-desktop-btn">
            Logout
          </button>
        </div>
      </nav>
    </div>
    <div className="mobile-view">
      <div className="top-container">
        <img
          className="website-logo-mobile"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <button className="logout-button" type="button">
          <img
            className="logout-img"
            alt="nav logout"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          />
        </button>
      </div>
      <div className="bottom-container">
        <ul className="mobile-nav-menu">
          <li className="nav-link-mobile">
            <img
              className="menu-item"
              alt="nav home"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            />
          </li>
          <li className="nav-link-mobile">
            <img
              className="menu-item"
              alt="nav products"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            />
          </li>
          <li className="nav-link-mobile">
            <img
              className="menu-item"
              alt="nav cart"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            />
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Header
