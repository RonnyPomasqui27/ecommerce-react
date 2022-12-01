import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { filterProductsThunk, getProductsThunk, productNameThunk } from '../store/slices/products.slice';

const Home = () => {
  const [inputValue, setInputValue] = useState("")
  const dispacth = useDispatch()
  const selector = useSelector(state => state.products)
  const [category, setCategory] = useState([])

  useEffect(() => {
    dispacth(getProductsThunk())
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
      .then(res => setCategory(res.data.data.categories))
  }, [])

  return (
    <>
      <NavBar />

      <div className="barra">
        <input type="text" 
        placeholder='Search...'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={() => dispacth(productNameThunk(inputValue))}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <hr style={{ marginTop: '2%' }} />
      <div className="principal">
        <div className="category">
          <div className="category-container">
            <h3>Category</h3>
            <hr />
            <div className="category-title">
              {
                category.map(title => (
                  <Link style={{ textDecoration: 'none', color: 'black' }} onClick={() => dispacth(filterProductsThunk(title.id))}> <li>{title.name}</li></Link>
                ))
              }
            </div>
          </div>
        </div>
        <div className="card-containerr">
          {
            selector.map(product => (
              <>
                <div className='cardd' key={product.id}>
                  <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>{
                    <div className="card-img" key={product.id}>
                      <img src={product.productImgs[0]} alt="" />
                      <h3 className='card-title' style={{ color: 'black', fontSize: '1rem' }}>{product.title}</h3>
                    </div>
                  }
                  </Link>
                  <div className="card-content">
                    <p>$ {product.price}</p>
                    {/* <a style={{ cursor: 'pointer' }}><i className="fa-solid fa-cart-plus" style={{ backgroundColor: '#b0d9db', padding: '10px', textAlign: 'center', borderRadius: '50%', color: 'white', fontSize: '1.2rem' }}></i></a> */}
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>

  );
};

export default Home;