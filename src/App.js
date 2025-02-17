import './App.css';
import {useSelector ,useDispatch} from 'react-redux'
import { increment,decrement } from './Action';
//changed to 1
function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Hello {counter}</h1>
     <button onClick={()=>dispatch(increment())}>Add</button>
     <button onClick={()=>dispatch(decrement())}>Reduce</button>
     
    </div>
  );
}

export default App;
