import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './main.css'

import Header from './Header'
import Home from './Home'
import Collapsible from './Collapsible'
import Sidebar from './Sidebar'
import About from './About'
import OrderList from './Order/OrderList'
import OrderSingleOrder from './Order/OrderSingleOrder'
import OrderNewOrder from './Order/OrderNewOrder'

// const items = [
//   // { name: 'home', label: 'Home' },
//   {
//     name: 'man',
//     label: 'Man clothing',
//     items: [
//       { name: 'coats', label: 'Coats' },
//       { name: 'jackets', label: 'Jackets' },
//       { name: 'jeans', label: 'Jeans' },
//       { name: 'jumpers', label: 'Jumpers' },
//       { name: 'hoodies', label: 'Hoodies' },
//       { name: 'shirts', label: 'Shirts' },
//       { name: 'shorts', label: 'Shorts' },
//       { name: 'suits', label: 'Suits' },
//       { name: 'sweaters', label: 'Sweaters' },
//       { name: 'ties', label: 'Ties' },
//       { name: 'trousers', label: 'Trousers' },
//       { name: 't-shirts', label: 'T-Shirts' },
//     ],
//   },
//   {
//     name: 'woman',
//     label: 'Woman clothing',
//     items: [
//       { name: 'coats', label: 'Coats' },
//       { name: 'dresses', label: 'Dresses' },
//       { name: 'jackets', label: 'Jackets' },
//       { name: 'jeans', label: 'Jeans' },
//       { name: 'jumpers', label: 'Jumpers' },
//       { name: 'hoodies', label: 'Hoodies' },
//       { name: 'shirts', label: 'Shirts' },
//       { name: 'shorts', label: 'Shorts' },
//       { name: 'skirts', label: 'Skirts' },
//       { name: 'suits', label: 'Suits' },
//       { name: 'sweaters', label: 'Sweaters' },
//       { name: 'trousers', label: 'Trousers' },
//       { name: 't-shirts', label: 'T-Shirts' },
//     ],
//   },
// ]

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Header className="w-100" />
        <div className="row w-100">
          <Collapsible button={
            <FontAwesome
              className="fa fa-bars ml-4"
              name="bars"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          }>
            <div className="ml-2 col-md-2">
              <Sidebar />
            </div>
          </Collapsible>  

            {/********************************Add routing******************************/}
            <div className="container col-md-9">
              <div id="content">
                <Route path='//' component={Home} />
                <Route path='/about-us' component={About} />
                <Route path='/orders-list' component={OrderList} />
                <Route path='/single-order' component={OrderSingleOrder} />
                <Route path='/new-order' component={OrderNewOrder} />

              </div>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}
