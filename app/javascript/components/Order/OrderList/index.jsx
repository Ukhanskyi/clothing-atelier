import React from 'react'
import { Link } from 'react-router-dom';
import './styles'

class OrderList extends React.Component {
  constructor(orders) {
    super(orders);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    fetch('/orders.json')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ orders: data }) });
  }

  render() {
    var orders = this.state.orders.map((order) => {
      return (
        <div key={order.id}>
          <hr></hr>
          <div className="alert alert-light">
            <h3>Custommer: {order.name} {order.surname} </h3>
            <br></br>

            <p><b>Email: </b> {order.email} </p>
            <p><b>Phone: </b> {order.phone} </p>
            <p><b>Clothing name: </b> {order.detail.clothing_name} </p>
            <p><b>Size: </b> {order.detail.size} </p>
            <p><b>Price: </b> {order.detail.price} </p>

            <div className="btn-group">
              <Link to='/order'>
                <button className='btn btn-outline-primary'>
                  Show order
                </button>
              </Link>
              <button className='btn btn-outline-primary ml-1'>
                Confirm order
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        <h1 className="row justify-content-center">All Orders</h1>
        {orders}
      </div>
    )
  }
}

export default OrderList
