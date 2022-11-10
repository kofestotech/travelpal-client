import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/private/Dashboard';

const Authenticated = () => {
  return (
    <>
     <Router>
      <Routes>
       <Route path='/home' element={<Dashboard/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default Authenticated
