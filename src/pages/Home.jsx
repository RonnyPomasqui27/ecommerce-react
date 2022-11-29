import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

  const dispacth = useDispatch()
  const selector = useSelector(state => state.products)

  useEffect(() => {
    dispacth(getProductsThunk())
  }, [])

  return (
    <>
      <NavBar />
      <div className="card-container">
        {
          selector.map(product => (
            <>
              <div className='card'>
                <Link to={`/products/${product.id}`} style={{textDecoration:'none'}}>{
                  <div className="card-img" key={product.id}>
                    <img src={product.productImgs[0]} alt="" />
                    <h3 className='card-title' style={{color: 'black', fontSize: '1rem' }}>{product.title}</h3>
                  </div>
                }
                </Link>
                <div className="card-content">
                  <p>$ {product.price}</p>
                  <a style={{ cursor: 'pointer' }}><i className="fa-solid fa-cart-plus" style={{ backgroundColor: '#b0d9db', padding: '10px', textAlign: 'center', borderRadius: '50%', color: 'white', fontSize: '1.2rem' }}></i></a>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </>

  );
};

export default Home;