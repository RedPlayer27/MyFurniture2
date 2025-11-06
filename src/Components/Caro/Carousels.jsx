import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images91/img1.png';
import img2 from '../../images91/img2.png'
import { Button } from 'react-bootstrap';
import './Carousels.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



function Carousels() {

  return (
    <Carousel className='bg1'>

      <Carousel.Item >
         <div className='container caroslide'>
            <div className="row">
              <div className="col-xl-6">    
                <h4 className='f1'>New Products</h4>
                <h1 className='f2'>Flexible Chair</h1>
                <h6>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna</h6>
                   <Button variant="warning pd1">Shop Now</Button>
                </div>
              <div className="col-xl-6"><img src={img1}/></div>
            </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
           <div className='container caroslide'>
            <div className="row">
              <div className="col-xl-6">
                <h4 className='f1'>Best Seller</h4>
                <h1 className='f2'>Creative Sofa</h1>
                <h6>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna</h6>
                 <Button variant=" pd1">Shop Now</Button>
              </div>
              <div className="col-xl-6"><img src={img2}/></div>
            </div>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carousels;