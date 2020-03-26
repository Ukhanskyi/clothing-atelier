import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './main.css'

import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Orders from './order/Orders.jsx'
import Order from './order/Order.jsx'

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

export default class Main extends Component {

  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header>
            <button onClick={this.toggle} type="button" id="sidebarCollapse" className="my-0 mr-md-auto btn btn-light">
              <h5 className="my-0 mr-md-auto font-weight-bold">CLOTHING ATELIER</h5>
            </button>
          </Header>

          <div className="row w-100">
            <div className="container col-md-2">
              <button onClick={this.toggle} type="button" id="sidebarCollapse" className="my-0 mr-md-auto btn btn-light">
                <h5 className="my-0 mr-md-auto font-weight-bold">CLOTHING ATELIER</h5>
              </button>
              {this.state.on && (
                <Sidebar />
              )}
            </div>

            {/********************************Add routing******************************/}
            <div className="container col-md-9">
              <div id="content">
                <Route path='//' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/orders' component={Orders} />
                <Route path='/order' component={Order} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
