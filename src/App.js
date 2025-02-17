import './App.css';
import {useSelector ,useDispatch} from 'react-redux'
import { increment,decrement } from './Action';

function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Hello {counter}</h1>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
     
    </div>
  );
}

export default App;
