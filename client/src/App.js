import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Pagenotfound from './pages/Pagenotfound';
import Shopping from './pages/shopping';
import Sell from './pages/Sell';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/*" element={<Pagenotfound />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/sellingpage" element={<Sell />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
