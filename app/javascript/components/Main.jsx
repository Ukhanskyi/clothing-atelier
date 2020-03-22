import React from 'react'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Orders from './order/Orders.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import Show from './order/Show.jsx'

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/********************************Add routing******************************/}
        <Route path='//' component={Home} />
        <Route path='/orders' component={Orders} />
        <Route path='/show' component={Show} />

      </div>
    </BrowserRouter>
  );
}

export default Main
