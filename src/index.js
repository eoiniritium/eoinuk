import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.scss'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './Header';
import Footer from './Footer'

import Home from './Home';
import About from './About';
import Contact from './Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className='content'>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
