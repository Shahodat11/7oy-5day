import React from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"
import logo from '../../assets/Rectangle 2.svg'

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div className='container'>
      <div className="nav-links">
        <div className="item">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop All</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
        <div className="nav">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <input type="text" placeholder='Search Product...' />        
        </div>
      </div>
    </div>
  )
}

export default Navbar