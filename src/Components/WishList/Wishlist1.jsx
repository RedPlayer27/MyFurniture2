import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { FaShoppingCart } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function Wishlist1() {
  const { wishlist, addToWishlist, decreaseQuantity, removeFromWishlist } = useWishlist();

  const totalPrice = wishlist.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalQuantity = wishlist.reduce((acc, item) => acc + item.quantity, 0);

  if (wishlist.length === 0) {
    return (
      <Container className="mt-4">
        <style>{`
@media (max-width: 576px) {
  h2 { font-size: 1.25rem }
  .wishlist-text { font-size: 0.85rem }
}
        `}</style>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="wishlist-text">Your Wishlist is empty</h2>
          <Nav>
            <Nav.Link>
              <div className="ad1" style={{ position: 'relative', display: 'inline-block' }}>
                <Link to="/addtoCart">
                  <FaShoppingCart size={24} />
                  {totalQuantity > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-6px',
                        right: '-10px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '2px 6px',
                        fontSize: '12px',
                        lineHeight: 1,
                      }}
                    >
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </div>
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <style>{`
@media (max-width: 576px) {
  h2 { font-size: 1.25rem }
  .wishlist-text { font-size: 0.85rem }
  .wishlist-img { width: 60px; height: 60px }
}
      `}</style>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="wishlist-text">Your Wishlist</h2>
        <Nav>
          <Nav.Link>
            <div className="ad1" style={{ position: 'relative', display: 'inline-block' }}>
              <Link to="/addtoCart">
                <FaShoppingCart size={24} />
                {totalQuantity > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-10px',
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      fontSize: '12px',
                    }}
                  >
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </div>
          </Nav.Link>
        </Nav>
      </div>

      <Row className="font-weight-bold border-bottom pb-2 mb-3 wishlist-text">
        <Col xs={5}>Product</Col>
        <Col xs={2}>Price</Col>
        <Col xs={3}>Quantity</Col>
        <Col xs={2}>Remove</Col>
      </Row>

      {wishlist.map((product) => (
        <Row key={product.id} className="align-items-center mb-3 wishlist-text">
          <Col xs={5}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={product.image}
                alt={product.name}
                className="wishlist-img"
                style={{ objectFit: 'cover', borderRadius: '8px', marginRight: '10px', width: '80px', height: '80px' }}
              />
              <span className="wishlist-text">{product.name}</span>
            </div>
          </Col>
          <Col xs={2}>${product.price.toFixed(2)}</Col>
          <Col xs={3}>
            <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(product.id)}>-</Button>{' '}
            <span className="wishlist-text" style={{ margin: '0 10px' }}>{product.quantity}</span>
            <Button variant="outline-secondary" size="sm" onClick={() => addToWishlist(product)}>+</Button>
          </Col>
          <Col xs={2}>
            <Button variant="danger" size="sm" onClick={() => removeFromWishlist(product.id)}>
              <a className='din1' style={{fontSize:"16px"}}><MdDelete /></a>
            </Button>
          </Col>
        </Row>
      ))}

      <hr />

      <Row className="justify-content-end">
        <Col xs={4} xl={3} lg={3}>
          <h5 className="wishlist-text">Total: ${totalPrice.toFixed(2)}</h5>
          <Link to='/adPay'>
            <Button variant="success" className="w-100 bt1 mb-2" onClick={() => alert('Proceed to Checkout')}>
              Checkout
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Wishlist1;
