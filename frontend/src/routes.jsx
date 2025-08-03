import React, { useContext } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { AppContext } from './context/AppContext';

const Routes = () => {
  const { currentView } = useContext(AppContext);

  switch (currentView) {
    case 'home': return <Home />;
    case 'products': return <Products />;
    case 'about': return <About />;
    case 'contact': return <Contact />;
    default: return <Home />;
  }
};

export default Routes;
