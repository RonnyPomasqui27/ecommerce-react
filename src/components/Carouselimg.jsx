import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const Carouselimg = () => {
  const { id } = useParams()
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(getProductsThunk())
  }, [])

  const product = useSelector(state => state.products)
  const selectProduct = product.find(newProduct => newProduct.id === Number(id))

  return (
    <>
      <img src={selectProduct?.productImgs[0]} alt="" />
    </>
  );
};

export default Carouselimg;

