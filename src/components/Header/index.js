// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="headerLogo">
    {console.log('Header')}
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="header">
      <Link to="/">
        <h1 className="HomeI">Home</h1>
      </Link>
      <h1>Products</h1>
      <h1>Cart</h1>
      <button type="button">LogOut</button>
    </div>
  </div>
)

export default Header
