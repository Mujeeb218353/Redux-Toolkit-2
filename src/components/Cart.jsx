import React from 'react'
import { useSelector } from 'react-redux'
import { getItemsSelector } from '../redux/slices/cartSlice';

const Cart = () => {
    const items = useSelector(getItemsSelector);
    const total = items.reduce((acc, item) => acc + item.price, 0);
    console.log(items);
  return (
    <div className='w-full border border-white rounded p-4 flex flex-col items-center gap-4'>
        <h1 className='text-2xl font-bold'>Cart Items</h1>
        <div className='text-center text-2xl'>
            Total Items: {items.length} (Rs. {total})/-
        </div>
    </div>
  )
}

export default Cart