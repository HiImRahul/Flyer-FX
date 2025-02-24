import './App.css';
// import JSPMprintButton from './PrintButton.js'
// import QZPrintButton from './QZPrint.js'
// import QZPrint80mm from './QZPrint80mm.js'
// import Invoice from './Invoice.js'
// import JSPM80mm from './JSPM80mm.js';
import {useSelector ,useDispatch} from 'react-redux'
//import { increment,decrement } from './Action';
import JobRegistrationForm from './Components/JobForm.js'
import Header from './Components/Header.js';


//changed to 1
function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
     
   
     <Header/>
     <JobRegistrationForm/>
     

     
     {/* <button onClick={()=>dispatch(increment())}>Add</button>
     <button onClick={()=>dispatch(decrement())}>Reduce</button> */}
    </div>
  );
}

export default App;
