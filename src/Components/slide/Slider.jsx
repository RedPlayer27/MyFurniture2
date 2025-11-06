import React, { useRef, useState } from 'react'

import "./Slider1.css";
import img1 from '../../images91/img1.png'
import Sm1 from '../../images91/Sm1.png'
import sm2 from '../../images91/sm2.jfif'
import sm3 from '../../images91/sm3.jfif'
import sm4 from '../../images91/sm4.jfif'
import sm5 from '../../images91/sm5.jfif'

const Slider = () => {
  const containerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    const container = containerRef.current;
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const container = containerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };


  return (
    <div className='container'>

      <div
        className="scroll-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className=" timo"><div className='card'><img src={sm5} style={{width:"100%"}} /></div></div>
        <div className="card"><img src={Sm1} style={{width:"100%"}}></img></div>
        <div className="card"><img src={sm2} style={{width:"100%"}}></img></div>
        <div className="card"><img src={sm3} style={{width:"100%"}}></img></div>
        <div className="card"><img src={sm4} style={{width:"100%"}}></img></div>
        <div className="card"><img src={sm5} style={{width:"100%"}}></img></div>
        <div className="card"><img src={Sm1} style={{width:"100%"}}></img></div>
        <div className="card"><img src={sm2} style={{width:"100%"}}></img></div>
      </div>
      <section>
                <div className='flot2'>
                    <h2>Our Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
                </div>
      </section>
    </div>
  );
};


export default Slider