import React from 'react'
import Fur1 from '../../images91/Fur1.jpg'
import Fur2 from '../../images91/Fur2.jpg'
import './About1.css'

function About1() {
    return (
        <section id='abut'>
            <div className='flot1'>
                <h1>ABOUT US</h1>
                <p>Home</p>
                <p>About</p>
            </div>
            <div className='nod1'>
                <h2>Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.</h2>
            </div>
            <div className='flo'>
                <div className='col-md-6 col-xl-6 col-sm-12 im1'>
                    <img src={Fur1} />
                </div>
                <div className='col-md-6 col-xl-6 col-sm-12 im1'>
                    <img src={Fur2} alt="" />
                </div>
            </div>
            <div className='flo1'>
                <div className='col-md-6 col-xl-6 col-sm-12'>
                    <h4>OUR STORES</h4>
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='col-md-6 col-xl-6 col-sm-12'>
                    <h4>OUR MISSION</h4>
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>  
            </div>
        </section>
    )
}

export default About1