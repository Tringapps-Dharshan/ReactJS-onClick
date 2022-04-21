import './App.css';
import './Userdetails.css';
import Userdetails from './Userdetails';

function App() {
  const names=[{name:"Dharshan"},{name:"Thangaraj"},{name:"Sherin"}];
  return (
    <div>
      <h1 className='header'> - - - B C A - - - </h1>
      <Userdetails array={names}/>
      <h1 className='header'> - - - - - - - - - - </h1>
    </div>
  );
}

export default App;
