import React from 'react'
import OrderNew from './OrderNew/OrderNew'
import OrderList from './OrderList/OrderList'
// import './styles'

class OrderBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewOrder = this.addNewOrder.bind(this)
  }

  handleFormSubmit(name, surname, email, phone, address, gender, clothing_name, color,
    collar, sleeve, length, size, price) {
    let body = JSON.stringify({ fruit: { name: name, surname: surname, email: email, phone: phone,
      address: address, gender: gender, clothing_name: clothing_name, color: color, collar: collar,
      sleeve: sleeve, length: length, size: size, price: price} })

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => { return response.json() })
      .then((order) => {
        this.addNewOrder(order)
      })
  }

  addNewOrder(order) {
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  // handleFormSubmit(name, surname, email, phone, address, gender, clothing_name, color,
  //                  collar, sleeve, length, size, price) {
  //   console.log(name, surname, email, phone, address, gender, clothing_name, color,
  //               collar, sleeve, length, size, price)
  // }

  componentDidMount() {
    fetch('/orders.json')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ orders: data }) });
  }

  render() {
    return (
      <div>
        <OrderNew handleFormSubmit={this.handleFormSubmit} />
        <OrderList orders={this.state.orders} />
      </div>   
    )  
  }
}

export default OrderBody
