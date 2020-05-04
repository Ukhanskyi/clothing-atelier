import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './main.css'

import Header from './Header'
import Home from './Home'
import Collapsible from './Collapsible'
import Sidebar from './Sidebar'
import About from './About'
import OrderList from './Order/OrderList/OrderList'
import OrderSingleOrder from './Order/OrderSingleOrder'
import OrderNew from './Order/OrderNew/OrderNew'
import OrderBody from './Order/OrderBody'


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.current_user
    };
  }

  render() {
    console.log(this.state.currentUser)
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
                {/* <OrderBody /> */}
                <Route path='//' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/orders/new' component={OrderNew} />
                <Route path='/orders-list' component={OrderList} />
                <Route path='/orders-show' component={OrderSingleOrder} />
              </div>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}
