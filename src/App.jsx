import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headbar from './Components/slide/Headbars/Headbar';
import Carousels from './Components/Caro/Carousels';
import Slider from './Components/slide/Slider';
import Gallery from './Components/Img-G/Gallery';
import Banner1 from './Components/Banner/Banner1';
import Footer from './Components/Footer/Footer';
import About1 from './Components/About/About1';
// import Filter1 from './Components/Filter/Filter1';
import Map from './Components/Contact/Map';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import ABOUT from './Components/ABOUT1/ABOUT';
import CONTACT1 from './Components/CONTACT1/CONTACT1';
import Bedroom from './Components/Fillers3/HomeF1/Bedroom';
import Dining from './Components/Fillers3/HomeF1/Dining';
import Living from './Components/Fillers3/HomeF1/Living';
import Lounge from './Components/Fillers3/OfficeF1/Lounge';
import OfficeChair from './Components/Fillers3/OfficeF1/OfficeChair';
import OfficeTable from './Components/Fillers3/OfficeF1/OfficeTable';
import HospitalBed from './Components/Fillers3/HospitalF1/HospitalBed';
import HospitalUtility from './Components/Fillers3/HospitalF1/HospitalUtility';
import Wishlist1 from './Components/WishList/Wishlist1';
// import { WishlistProvider } from './Components/WishList/WishlistContext';
import { WishlistProvider } from './context/WishlistContext'; 
import Pament from './Components/Payment/Pament';
import Login1 from './Components/Login/Login1';
import ScrollToTop from './Components/slide/Headbars/TopScrooll';
// import Dining from './Components/Dining/Dining';
// import Bedroom from './Components/Fillers3/HomeF1/Bedroom';
// import Living from './Components/Dining/Living';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Headbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<ABOUT />}></Route>
          <Route path='/' element={<Gallery />}></Route>
          {/* <Route path='' element = {<Banner1/>}></Route> */}
          <Route path='/about' element={<About1 />}></Route>
          <Route path='/bedroom' element={<Bedroom />}></Route>
          <Route path='/dining' element={<Dining />}></Route>
          <Route path='/living' element={<Living />}></Route>
          <Route path='/lounge' element={<Lounge />}></Route>
          <Route path='/officeC' element={<OfficeChair />}></Route>
          <Route path='/officeT' element={<OfficeTable />}></Route>
          <Route path='/hospitalB' element={<HospitalBed />}></Route>
          <Route path='/hospitalU' element={<HospitalUtility />}></Route>
          <Route path='/Map' element={<CONTACT1 />}></Route>
          <Route path='/addtoCart' element={<Wishlist1 />}></Route>
          <Route path='/adPay' element={<Pament />}></Route>
         <Route path='/login1' element={<Login1/>}></Route>
        </Routes>
        {/* <Wishlist1/> */}
         <WishlistProvider/>
        <Footer />
         <ScrollToTop />
      </BrowserRouter>
      



      {/* <div className='container bg-info'>
          <h1>ksdnfkdsn</h1>
      </div> */}
      {/* <Carousels />
      <Slider />
      <Gallery />
      <Banner1 />
      <Footer />
      <About1/>
      <Map/> */}
    </>
  )
}

export default App
