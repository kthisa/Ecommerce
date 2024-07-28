/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Search from "./Search"


const Header = ({ card }) => {
  return (
    <div>
      <nav className="nav">
          <div className="logo">
            <Link to={'/'}><img className="logos" width="150px" src="/products/cart.png" /></Link>

          </div>
        <div className="search">
          <Search />
        </div>
        <Link className="cartlink" to={'/cart'}>
          <div className="header">
            <span id="cart" className="ml-3">Cart</span>
            <span className="ml-1" id="cart_count">{card.length}</span>
          </div></Link>
      </nav>

      <div>
        <Link to={'/signup'} ><img className="signn" src="\products\user.png" alt="" /></Link>
      </div>

   

    </div>
  )
}

export default Header
