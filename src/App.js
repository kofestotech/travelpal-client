import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';
import Contact from './pages/public/Contact';
import Login from './pages/public/Login';
import About from './pages/public/About';
import Register from './pages/public/Register';

function App() {
  return (
    <>
     <Router>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about-us' element={<About/>}/>
       <Route path='/register' element={<Register/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
