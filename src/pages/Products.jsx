
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carouselimg from '../components/Carouselimg';
import NavBar from '../components/NavBar';
import { getProductsThunk } from '../store/slices/products.slice';

const Products = () => {

  const { id } = useParams()
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(getProductsThunk())
  }, [])

  const product = useSelector(state => state.products)
  const selectProduct = product.find(newProduct => newProduct.id === Number(id))
  return (
    <>
      <NavBar />
      <div className='pro-detail'>
        <div className="pro-img">
          <Carouselimg/>
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
            <a className='add'> add to cart</a>
          </div>
        </div>
      </div>
      {/* carrusel en otro componente */}
    </>
  );
};

export default Products;