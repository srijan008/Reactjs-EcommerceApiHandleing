import React, { useEffect, useState } from 'react';
import './index.css';
import Category from './Category'; 
import axios from 'axios';

const Card = () => {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalProduct, setFinalProduct] = useState([]);
  const [specificProduct, setSpecicProduct] = useState('')
  
  const getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((resfinal) => {
        setFinalCategory(resfinal);
      });
  };

  const getProduct = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((resfinal) => {
        setFinalProduct(resfinal.products);
      });
  };
  useEffect(() => {
    if(specificProduct !== ''){
      axios.get(`https://dummyjson.com/products/category/${specificProduct}`)
      .then((res) => res.data)
      .then((resfinal) => {
        setFinalProduct(resfinal.products);
      });
    }
  },[specificProduct]);

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  const pitems = finalProduct.map((product, index) => {
    return (
      <ProductItem key={index} product={product} />
    );
  });

  return (
    <div className='py-[40px]'>
      <div className='max-w-[1320px] px-[50px]'>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div>
            <Category finalData={finalCategory} setSpecicProduct ={setSpecicProduct}/>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-4'>
              {
                finalProduct.length >= 1 ? pitems : 'No Product Found'
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

function ProductItem({ product }) {
  return (
    <div className='shadow-lg text-center pb-4'>
      <img src={product.thumbnail} alt={product.title} className='w-[100%] h-[200px]'/>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
}
