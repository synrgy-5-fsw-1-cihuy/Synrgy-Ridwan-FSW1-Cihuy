import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/parts/Home';
import Cars from './components/parts/Cars';

function App() {
  return (
    
    <div className="App">
      <Router>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cari-mobil' element={<Cars />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
