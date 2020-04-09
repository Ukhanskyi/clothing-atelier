import React from 'react'
import { Link } from 'react-router-dom';

class Order extends React.Component {
  constructor(props) {
    super(props);
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
    var order = this.state.orders.map((order) => {
      return (
        <div key={order.id}>
          <hr></hr>
          <div className="alert alert-light">
            <h3>Custommer: {order.name} {order.surname} </h3>
            <br></br>

            <p><b>Email: </b> {order.email} </p>
            <p><b>Phone: </b> {order.phone} </p>
            <p><b>Address: </b> {order.address} </p>

            <div>
              { order.gender == true ? (<p><b>Gender: </b> Male </p>) : (<p><b>Gender: </b> Female </p>)}
            </div>

            <hr></hr>
            <p><b>Clothing name: </b> {order.detail.clothing_name} </p>
            <p><b>Color: </b> {order.detail.color} </p>
            <p><b>Collar: </b> {order.detail.collar} </p>
            <p><b>Sleeve: </b> {order.detail.sleeve} </p>
            <p><b>Length: </b> {order.detail.length} </p>
            <p><b>Size: </b> {order.detail.size} </p>
            <p><b>Price: </b> {order.detail.price} </p>

            <Link to="/edit">
              <button className='btn btn-outline-primary'>
                Edit order
              </button>
            </Link>
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        <h1 className="row justify-content-center">Current order</h1>
        {order}
      </div>
    )
  }
}

export default Order
