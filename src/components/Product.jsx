import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import products from "../products.json";
import productPic from '../assets/productPic.jpg'

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full border border-white rounded p-4 gap-4 flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold text-center mb-4">Products</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={product.id}>
              <img
                className="p-8 rounded-t-lg w-full"
                src={productPic}
                alt="product image"
              />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.productName}
                </h5>
              <div className="flex items-center justify-between mt-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => dispatch(addItem(product))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;