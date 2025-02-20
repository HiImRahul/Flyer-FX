import './App.css';
import JSPMprintButton from './PrintButton.js'
import QZPrintButton from './QZPrint.js'
import Invoice from './Invoice.js'
import {useSelector ,useDispatch} from 'react-redux'
import { increment,decrement } from './Action';


//changed to 1
function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
     
     <Invoice/>
     <JSPMprintButton/>
     <QZPrintButton/>
     <button onClick={()=>dispatch(increment())}>Add</button>
     <button onClick={()=>dispatch(decrement())}>Reduce</button>
    </div>
  );
}

export default App;
