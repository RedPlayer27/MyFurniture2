import React, { useEffect, useState } from 'react';
import './Gallery.css';
import Gallery2 from './Gallery2';
import Gallery3 from './Gallery3';
import { useWishlist } from '../../context/WishlistContext'; // Import wishlist hook

import bg1 from '../../images91/bg1.jfif';
import bg2 from '../../images91/bg2.jfif';
import bg3 from '../../images91/bg3.jfif';
import bg4 from '../../images91/bg4.jfif';
import bg5 from '../../images91/bg5.jfif';
import bg6 from '../../images91/bg6.jfif';
import bg7 from '../../images91/bg7.jfif';
import bg8 from '../../images91/bg8.jfif';

function Gallery() {
  const { addToWishlist, isInWishlist } = useWishlist(); // Use wishlist context

  const initialImgs = [
    { id: 1, name: "Living Room Sets", tag: "On Sale", price: 899, src: bg1 },
    { id: 2, name: "Sofa for living room", tag: "Featured", price: 699, src: bg2, discount: "-15%" },
    { id: 3, name: "Big chair", tag: "On Sale", price: 499, src: bg3, discount: "-10%" },
    { id: 4, name: "Flower table", tag: "Featured", price: 349, src: bg4 },
    { id: 5, name: "L sofa", tag: "Trending", price: 799, src: bg5, discount: "-11%" },
    { id: 6, name: "New badge product", tag: "New Arrival", price: 299, src: bg6 },
    { id: 7, name: "Variable product", tag: "Trending", price: 399, src: bg7, discount: "-18%" },
    { id: 8, name: "Soldout product", tag: "New Arrival", price: 199, src: bg8, discount: "-38%" }
  ];

  const initialFilters = [
    { name: "New Arrival", status: false },
    { name: "Featured", status: false },
    { name: "On Sale", status: false },
    { name: "Trending", status: false }
  ];

  const [all, setAll] = useState(true);
  const [filters, setFilters] = useState(initialFilters);
  const [imgs, setImgs] = useState(initialImgs);

  const handleSetAll = () => {
    const resetFilters = filters.map(f => ({ ...f, status: false }));
    setFilters(resetFilters);
    setImgs(initialImgs);
    setAll(true);
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    const index = parseInt(e.currentTarget.dataset.index);

    const updatedFilters = filters.map((f, i) => ({
      ...f,
      status: i === index ? !f.status : false // Only toggle clicked one
    }));

    const isSelected = !filters[index].status;
    setFilters(updatedFilters);
    setAll(!isSelected); // If nothing selected, revert to all
  };

  useEffect(() => {
    const activeTags = filters.filter(f => f.status).map(f => f.name);
    if (activeTags.length === 0 || activeTags.length === filters.length) {
      setImgs(initialImgs);
      setAll(true);
    } else {
      const filteredImgs = initialImgs.filter(img => activeTags.includes(img.tag));
      setImgs(filteredImgs);
      setAll(false);
    }
  }, [filters]);

  return (
    <div>
      <Gallery2
        onClickAll={handleSetAll}
        all={all}
        onClick={handleFilterClick}
        filters={filters}
      />
      <Gallery3 
        imgs={imgs} 
        addToWishlist={addToWishlist} 
        isInWishlist={isInWishlist} 
      />
    </div>
  );
}

export default Gallery;
