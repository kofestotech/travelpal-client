import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from "react";
import AnimatedLoader from './components/AnimatedLoader';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/public/Home';
// import Contact from './pages/public/Contact';
// import Login from './pages/public/Login';
// import About from './pages/public/About';
// import Register from './pages/public/Register';

const Authenticated = React.lazy(()=>import("./Authenticated"));
const UnAuthenticated = React.lazy(()=>import("./UnAthenticated"));

const location = window.location.pathname;
// const token = window.localStorage.getItem('token');
const token = 'koffi'

function App() {
  return (
    <>
     <Suspense fallback={<AnimatedLoader message="Travelpal Loading..." />}>
        {token && location !== "/" ? (
          <Authenticated />
        ) : (
          <UnAuthenticated/>
        )}
      </Suspense>
    </>
  );
}

export default App;
