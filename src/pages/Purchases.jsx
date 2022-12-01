import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import Card from 'react-bootstrap/Card';

const Purchases = () => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.purchases)


  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])

  return (
    <>
      <NavBar />
      <div className="purchessss">
        {
          selector.map(purchase => (
            <>
              <Card key={purchase.id}>
                <Card.Header>Date: {purchase.cart.products[0]?.title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>

                    </p>
                    <footer className="blockquote-footer"> Price: $
                    {purchase.cart.products[0]?.price}</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </>
          ))
        }
      </div>

    </>
  );
};

export default Purchases;