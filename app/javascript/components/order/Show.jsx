import React from 'react'

class Show extends React.Component {
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
            <p><b>Gender: </b> {order.gender} </p>
            <hr></hr>
            <p><b>Clothing name: </b> {order.detail.clothing_name} </p>
            <p><b>Color: </b> {order.detail.color} </p>
            <p><b>Collar: </b> {order.detail.collar} </p>
            <p><b>Sleeve: </b> {order.detail.sleeve} </p>
            <p><b>Length: </b> {order.detail.length} </p>
            <p><b>Size: </b> {order.detail.size} </p>
            <p><b>Price: </b> {order.detail.price} </p>

            <button className='btn btn-outline-primary'>
              Edit order
            </button>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h1 className="row justify-content-center">Current order</h1>
        {order}
      </div>
    )
  }
}

export default Show
