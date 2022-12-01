
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Carouselimg from '../components/Carouselimg';
import NavBar from '../components/NavBar';
import { addCartThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/products.slice';

const Products = () => {

  const { id } = useParams()
  const dispacth = useDispatch()
  const [search, setSearch] = useState("")

  useEffect(() => {
    dispacth(getProductsThunk())
  }, [])

  const product = useSelector(state => state.products)

  const selectProduct = product.find(newProduct => newProduct.id === Number(id))

  const relateProducts = product.filter(newItem => newItem.category?.id === selectProduct.category?.id)

  const add = () => {
    const addToCart = {
      id: selectProduct?.id,
      quantity: search
    }
    // console.log(addToCart)
    dispacth(addCartThunk(addToCart))
  }

  return (
    <>
      <NavBar />
      <div className='pro-detail'>
        <div className="pro-img">
          <Carouselimg />
        </div>
        <div className="pro-info">
          <div className="pro-text">
            <div className="status">
              <h2>{selectProduct?.title}</h2>
              <div className="status-con">
                <div className='boll'></div>
                <p>{selectProduct?.status}</p>
              </div>
            </div>
            <p>{selectProduct?.description}</p>
            <p>$ {selectProduct?.price}</p>
            <input type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <a className='add' onClick={add}> add to cart</a>
            {/* <button onClick={addToCart}>ADD to cart</button> */}
          </div>
        </div>
      </div>

      <div className="relate-container">
        {
          relateProducts.map(item => (
            <>
              <div className='card'>
                <Link to={`/products/${item.id}`} style={{ textDecoration: 'none' }}>{
                  <div className="card-img" key={item.id}>
                    <img src={item.productImgs[0]} alt="" />
                    <h3 className='card-title' style={{ color: 'black', fontSize: '1rem' }}>{item.title}</h3>
                  </div>
                }
                </Link>
                <div className="card-content">
                  <p>$ {item.price}</p>
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

export default Products;