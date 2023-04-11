import './App.css';
import Home from './component/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Home/>
      <ToastContainer style={{width:'55%',height:'50%',backgroundColor:''}}/>
    </div>
  );
}

export default App;
