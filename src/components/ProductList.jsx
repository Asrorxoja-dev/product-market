import React from 'react';
import products from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAmount, decreaseAmount, removeItem } from '../../features/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const productsInStore = useSelector((state) => state.products.products);

  const handleIncrease = (productId) => {
    dispatch(increaseAmount(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseAmount(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
  };

  return (
    <div>
      {products.map((product) => {
        const productInStore = productsInStore.find((p) => p.id === product.id);
        const amount = productInStore ? productInStore.amount : 0;
        return (
          <div key={product.id} className="card lg:card-side bg-base-150 mb-10 mt-24 shadow-xl mx-10">
            <figure><img className='object-cover' src={product.images[0]} alt="Album"/></figure>
            <div className="card-body ml-5">
              <h2 className="card-title text-3xl">{product.title}</h2>
              <p>{product.description}</p>
              <h2 className='text-2xl mb-20'>{product.price}$</h2>
              <button className='btn btn-error w-28 text-white ' onClick={()=>handleRemove(product.id)}>Remove</button>
              <div className="card-actions items-center justify-end">
                <button className='text-2xl font-bold' onClick={() => handleIncrease(product.id)}>+</button>
                <button className="btn text-3xl btn-ghost">{amount}</button>
                <button className='text-2xl font-bold' onClick={() => handleDecrease(product.id)}>-</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
