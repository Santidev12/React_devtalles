import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';

function App() {

  const { value } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
       
      </div>
      <h1>count is { value }</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
          decrement
        </button>
        <button onClick={() => dispatch( incrementByAmount(2) )}>
          increment by 2
        </button>
      </div>
    </>
  )
}

export default App
