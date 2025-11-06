import React, { useState, useEffect } from 'react';
import './Filter1.css';
import { useWishlist } from "../../context/WishlistContext";
import im3 from '../../images91/Bedroom1.png';
import im4 from '../../images91/Bedroom2.png';
import im5 from '../../images91/diningTable1.jfif';
import im6 from '../../images91/diningTable2.jfif';
import im7 from '../../images91/sofa1.jfif';
import im8 from '../../images91/sofa2.jfif';
import { FaHeart } from 'react-icons/fa';
import { PiArrowsOutCardinalLight } from 'react-icons/pi';
import { IoMdGitCompare } from 'react-icons/io';



function Filter1() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [products, setProducts] = useState([
    { id: 9, name: 'Bedroom Set A', price: 899, image: im3 },
    { id: 10, name: 'Bedroom Set B', price: 749, image: im4 },
    { id: 11, name: 'Dining Table A', price: 599, image: im5 },
    { id: 12, name: 'Dining Table B', price: 649, image: im6 },
    { id: 13, name: 'Sofa A', price: 499, image: im7 },
    { id: 14, name: 'Sofa B', price: 579, image: im8 },
  ]);

  const { addToWishlist, isInWishlist } = useWishlist(); // ✅ use Wishlist context

  // Sorting effect
  useEffect(() => {
    const sortedProducts = [...products];

    switch (selectedFilter) {
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'name-asc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  }, [selectedFilter]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };
  const { toggleWishlist } = useWishlist();

  return (
    <>
      <div className='filter1'>
        <p>Today</p>
        <div className="dropdown">
          <label htmlFor="filterSelect">Sort By: </label>
          <select
            id="filterSelect"
            className='jon'
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="">Relevance</option>
            <option value="price-high">Price (High - Low)</option>
            <option value="price-low">Price (Low - High)</option>
            <option value="name-asc">Name (A - Z)</option>
            <option value="name-desc">Name (Z - A)</option>
          </select>
        </div>
      </div>

      <figure>
        <div className='tom11 container'>
          <div className="row">
            {products.map((product) => (
              <div className='col-xl-3' key={product.id}>
                <div className='img21 position-relative'>
                  <img src={product.image} alt={product.name} />
                  <div className='addicons1'>
                    <button
                      type="button"
                      title={isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                      onClick={() =>
                        toggleWishlist({
                          ...product,
                          quantity: 1,
                        })
                      }
                      style={{
                        color: isInWishlist(product.id) ? 'red' : 'black',
                      }}
                    >
                      <FaHeart />
                    </button>

                    <button
                      type="button"
                      title="Zoom"
                      onClick={() => console.log('Zoom:', product.name)}
                    >
                      <PiArrowsOutCardinalLight />
                    </button>
                    <button
                      type="button"
                      title="Compare"
                      onClick={() => console.log('Compare:', product.name)}
                    >
                      <IoMdGitCompare />
                    </button>
                    
                  </div>
                </div>
                <div className='tx99'>
                  <h4>{product.name}</h4>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </figure>
    </>
  );
}

export default Filter1;













// import React, { useState } from 'react';
// import './Filter1.css'

// import im3 from '../../images91/Bedroom1.png'
// import im4 from '../../images91/Bedroom2.png'
// import im5 from '../../images91/diningTable1.jfif'
// import im6 from '../../images91/diningTable2.jfif'
// import im7 from '../../images91/sofa1.jfif'
// import im8 from '../../images91/sofa2.jfif'
// import { FaHeart } from 'react-icons/fa';
// import { PiArrowsOutCardinalLight } from 'react-icons/pi';
// import { IoMdGitCompare } from 'react-icons/io';

// function Filter1() {
//   const [selectedFilter, setSelectedFilter] = useState('');

//   const handleFilterChange = (event) => {
//     const value = event.target.value;
//     setSelectedFilter(value);
//     console.log('Selected Filter:', value);
//   };

//   return (
//     <section>
//       <div className='tx11'>
//         <h2>Dining</h2>
//         <p>Home/collection/bedroom</p>
//       </div>
//       <div className='filter1'>
//         <p>Today</p>
//         <div className="dropdown">
//           <label htmlFor="filterSelect"> Sort By:</label>
//           <select id="filterSelect" className='jon' value={selectedFilter} onChange={handleFilterChange}>
//             <option value="">Relevance</option>
//             <option value="price-high">Price (High - Low)</option>
//             <option value="price-low">Price (Low - High)</option>
//             <option value="name-asc">Name (A - Z)</option>
//             <option value="name-desc">Name (Z - A)</option>
//           </select>
//         </div>
//       </div>

//       <figure id='#addimg1'>
//         <div className='tom11 container'>
//           <div className="row">
//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im3} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//             </div>

//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im4} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//             </div>

//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im3} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//             </div>

//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im4} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </figure>

//       <figure id='#addimg1'>
//         <div className='tom11 container'>
//           <div className="row">
//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im5} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//             </div>

//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im6} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//             </div>

//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im7} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//               <div className='tx99'>
//                 <h4>Quality House Storage Grey Leat</h4>
//                 <p>ohk</p>
//               </div>
//             </div>

//             <div className=' col-xl-3'>
//               <div className='img21'>
//                 <img src={im8} alt="" />
//                 <div className='addicons1'>
//                   <span><FaHeart /></span>
//                   <span><PiArrowsOutCardinalLight /></span>
//                   <span><IoMdGitCompare /></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </figure>

//     </section>
//   );
// }

// export default Filter1