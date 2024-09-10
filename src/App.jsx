// import './App.css'
// import Counter from './components/Counter'
import Cart from './components/Cart';
import Product from './components/Product';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='min-h-screen flex flex-col items-center gap-8 bg-black text-white p-4'>
        <h1 className='text-3xl font-bold'>Redux Toolkit</h1>
        {/* <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <Counter />
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button> */}
        <Cart />
        <Product />
      </div>
    </>
  )
}

export default App
