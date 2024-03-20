import React from 'react';
import { Header, Ourwork, Work, Footer } from './containers';
import { Navbar } from './components';
import './App.css';
import "./containers/about/about.css"


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Ourwork />
      <Work />
      <Footer />
    </div>
  );
}


export default App;
