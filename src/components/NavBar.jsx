import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartThunk } from '../store/slices/cart.slice';
import Card from 'react-bootstrap/Card';

const NavBar = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const select = useSelector(state => state.cart)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  return (
    <>
      <div className='nav'>
        <div className="nav-container">
          <Link className='link' to='/' style={{ border: 'none', fontSize: '1.3rem' }}><i className="fa-solid fa-mountain-sun"></i>E-commerce</Link>
          <div className="links">
            <Link to='/login' className='link'>Login</Link>
            <Link to='/purchases' className='link'>Purchases</Link>
            <Link to='/' className='link' onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i></Link>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='cartttt'>
          {
            select.map(cart => (
              <Card>
                <Card.Header>{cart.title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>Price:  ${cart.price}</p>
                    <footer className="blockquote-footer">
                      {cart.brand}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            ))
          }

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;