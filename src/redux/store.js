// Store using Redux
// import { createStore } from 'redux';

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }

// export const store = createStore(reducer);

// Store using Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';


export const store = configureStore({
    reducer: {
        cart:cartReducer
    }
});