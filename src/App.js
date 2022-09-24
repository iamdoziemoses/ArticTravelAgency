import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return ( 
    <div>
      <ScrollToTop/>
      <Header />
      <Main />
      <Footer />
    </div>
   );
}
 
export default App;