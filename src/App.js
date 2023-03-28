import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Link to='/greeting'>Greetings</Link>
      <Link to='/'>Home</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/greeting' element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
