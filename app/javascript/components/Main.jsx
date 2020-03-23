import React from 'react'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Orders from './order/Orders.jsx'
import Order from './order/Order.jsx'
import About from './About.jsx'
import { BrowserRouter, Route } from 'react-router-dom'

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/********************************Add routing******************************/}
        <Route path='//' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/orders' component={Orders} />
        <Route path='/order' component={Order} />
      </div>
    </BrowserRouter>
  );
}

export default Main
