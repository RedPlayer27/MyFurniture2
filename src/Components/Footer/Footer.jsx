import React from 'react'
import "../Footer/Footer1.css"
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='bk1'>
      <div className='container  '>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <h4>ABOUT US</h4>
            <div>
              <p>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h4>INFORMATION</h4>
            <div>
              <ul className='tod'>
                <li>About Us</li>
                <li>Manufactures</li>
                <li>Tracking Order</li>
                <li>Privacy & Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className='col-md-6 col-lg-2'><h4>MY ACCOUNT</h4>
            <div>
              <ul className='tod'>
                <li><Link to = '/login1'>Login</Link></li>
                <li><Link to = '/addtoCart'>My Cart</Link></li>
                <li><Link to = '/addtoCart'>Wishlist</Link></li>
                <li>Compare</li>
                <li><Link to = '/login1'>My Account</Link></li>
              </ul>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h4>Newsletter</h4>
            <div>
              <form>
                <input type="email" placeholder='Enter E-Mail Address' className='into' />
                <button color='white' className='re1'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer