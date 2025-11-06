import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';
import { PiArrowsOutCardinalLight } from 'react-icons/pi';
import { useWishlist } from '../../context/WishlistContext';  // adjust path if needed

const Gallery3 = ({ imgs }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <ul>
      {imgs.map((img, i) => (
        <li key={i}>
          <figure id='addimg'>
            <img src={img.src} alt={img.name} />
            <div className='addicons'>
              <button
                type="button"
                onClick={() =>
                  toggleWishlist({
                    id: img.id,
                    name: img.name,             // ✅ Fixed field
                    image: img.src,             // ✅ Matches 'Filter1' structure
                    price: img.price || 0,
                    quantity: 1,
                  })
                }
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isInWishlist(img.id) ? 'red' : 'black',
                  padding: 0,
                  marginRight: '10px'
                }}
                aria-label="Add to Wishlist"
                title={isInWishlist(img.id) ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <FaHeart />
              </button>

              <span><PiArrowsOutCardinalLight /></span>
              <span><IoMdGitCompare /></span>
            </div>

            {img.discount && (
              <div className='dis1'>
                <span>{img.discount}</span>
              </div>
            )}

            <figcaption>
              <div>{img.name}</div>
              <span>{img.tag}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
};

export default Gallery3;
