import React, { Component } from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import ClothingSizeCalculatorBreast from '../../ClothingSizeCalculator/ClothingSizeCalculatorBreast';
import ClothingSizeCalculatorTight from '../../ClothingSizeCalculator/ClothingSizeCalculatorTight';
import ClothingSizeCalculatorWaist from '../../ClothingSizeCalculator/ClothingSizeCalculatorWaist';
import {
  JEANS,
  HOODIE,
  SWEATER,
  SHIRT,
  TSHIRT,
  JACKET,
  MAN,
  WOMAN,
  XS,
  S,
  M,
  L,
  XL,
  XXL,
  COAT,
  DRESS,
  JUMPER,
  SUIT,
  SHORTS,
  SKIRT,
  TROUSERS,
} from '../../../types';
import './styles.css';
import { standardSizes } from '../../../constants';

class OrderNewOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: props.location.state.gender,
      type:props.location.state.type,
      clothingName: props.location.state.type,
      clothingSize: '',
    };
  }

  componentDidUpdate() {
    const { gender: currentGender, type: currentType } = this.state;
    const { gender: newGender, type: newType } = this.props.location.state;
    
    if (newGender !== currentGender) {
      this.setState({ gender: newGender });
    }
    if (newType !== currentType) {
      this.setState({
        type: newType,
        clothingName: newType,
      });
    }
  }

  handleGenderChanged = (e) => {
    this.setState({ gender: e.currentTarget.value });
  }

  handleClosingNameChanged = (e) => {
    this.setState({ clothingName: e.currentTarget.value });
  }

  handleClothingSizeChanged = (e) => {
    this.setState({ clothingSize: e.target.value });
  }

  handleClick() {
    var name = this.refs.name.value;
    var surname = this.refs.surname.value;
    var email = this.refs.email.value;
    var phone = this.refs.phone.value;
    var address = this.refs.address.value;
    var gender = this.refs.gender.value;
    var clothing_name = this.refs.clothing_name.value;
    var color = this.refs.color.value;
    var collar = this.refs.collar.value;
    var sleeve = this.refs.sleeve.value;
    var length = this.refs.length.value;
    var price = this.refs.price.value;

    $.ajax({
      url: "orders/new",
      type: "POST",
      data: { order: { name: name,
                       surname: surname,
                       email: email,
                       phone: phone,
                       address: address,
                       gender: gender,
                       clothing_name: clothing_name,
                       color: color,
                       collar: collar,
                       sleeve: sleeve,
                       length: length,
                       price: price} },
      success: order => {
        this.props.handleSubmit(order);
      }
    });
  }


  render() {
    const { gender, type, clothingName, clothingSize } = this.state;
    let clothingSizeCalculator = null;

    switch (type) {
      case COAT:
      case DRESS:
      case JACKET:
      case JUMPER:
      case HOODIE:
      case SHIRT:
      case SUIT:
      case SWEATER:
      case TSHIRT:
        clothingSizeCalculator = (
          <ClothingSizeCalculatorBreast gender={gender} onClothingSizeChanged={this.handleClothingSizeChanged} />
        );
        break;
      case JEANS:
      case SHORTS:
      case SKIRT:
      case TROUSERS:
       {
        if (gender === MAN) clothingSizeCalculator = (
          <ClothingSizeCalculatorWaist gender={gender} onClothingSizeChanged={this.handleClothingSizeChanged}  />
        );
        else clothingSizeCalculator = (
          <ClothingSizeCalculatorTight gender={gender} onClothingSizeChanged={this.handleClothingSizeChanged}  />
        );

        break;
      }
    }

    let formFields = {}

    return (
      <div className=" row content">
        <div className="col-lg">
          <h3 className="row justify-content-center">New order</h3>
          <br/>

          <div className="row">
            <div className="col-sm-11">

              <form
                onSubmit={(e) => { props.handleFormSubmit(formFields.name.value,
                                                          formFields.surname.value,
                                                          formFields.email.value,
                                                          formFields.phone.value,
                                                          formFields.address.value,
                                                          formFields.gender.value,
                                                          formFields.clothing_name.value,
                                                          formFields.color.value,
                                                          formFields.collar.value,
                                                          formFields.sleeve.value,
                                                          formFields.length.value,
                                                          formFields.size.value,
                                                          formFields.price.value);
                                   e.target.reset(); }
              } >
                <div className=" row group mt-1">
                  <h6 className="my-auto col-sm-3">Name: </h6>
                  <input 
                    ref={input => formFields.name = input}
                    type="text"
                    placeholder='Enter your name'
                    className="form-control col-md-6"
                  />
                </div>

                <div className=" row group mt-1">
                  <h6 className="my-auto col-sm-3">Surame: </h6>
                  <input
                    ref={input => formFields.surname = input}
                    type="text"
                    className="form-control col-md-6"
                  />
                </div>

                <div className=" row group mt-1">
                  <h6 className="my-auto col-sm-3">Email: </h6>
                  <input
                    ref={input => formFields.email = input}
                    type="text"
                    className="form-control col-md-6"
                  />
                </div>

                <div className=" row group mt-1">
                  <h6 className="my-auto col-sm-3">Phone: </h6>
                  <input
                    ref={input => formFields.phone = input}
                    type="number"
                    className="form-control col-md-6"
                  />
                </div>

                <div className=" row group mt-1">
                  <h6 className="my-auto col-sm-3">Address: </h6>
                  <input
                    ref={input => formFields.address = input}
                    type="text"
                    className="form-control col-md-6"
                  />
                </div>

                <div className="row group mt-1">
                  <h6 className="my-auto col-sm-3">Your gender: </h6>
                  <input
                    ref={input => formFields.gender = input}
                    type="radio"
                    value={MAN}
                    className="mt-1"
                    onChange={this.handleGenderChanged}
                    checked={gender === MAN}
                  />
                  <span>Male</span>
                  <input
                    ref={input => formFields.gender = input}
                    type="radio"
                    value={WOMAN}
                    className="ml-3 mt-1"
                    onChange={this.handleGenderChanged}
                    checked={gender === WOMAN}
                  />
                  <span>Female</span>
                </div>

                <div className=" row group mt-1">
                  <h6 className="my-auto col-sm-3">Clothing name: </h6>
                  <input
                    ref={input => formFields.clothing_name = input}
                    type="text"
                    placeholder='Please enter clothing name'
                    className="form-control col-md-6 clothingName"
                    value={clothingName}
                    onChange={this.handleClosingNameChanged}
                  />
                </div>

                <div className=" row group mt-1">
                  <Form.Label className="my-auto col-sm-3">Color:</Form.Label>
                  <Form.Control
                    ref={input => formFields.color = input}
                    as="select"
                    className="form-control col-md-6"
                    custom
                  >
                    <option>White</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Red</option>
                    <option>Purple</option>
                    <option>Green</option>
                    <option>Orange</option>
                    <option>Pink</option>
                    <option>Yellow</option>
                    <option>Brown</option>
                    <option>Grey</option>
                  </Form.Control>
                </div>

                <div className=" row group mt-1">
                  <Form.Label className="my-auto col-sm-3">Collar: </Form.Label>
                  <Form.Control
                    ref={input => formFields.collar = input}
                    as="select"
                    className="form-control col-md-6"
                    custom
                  >
                    <option>Basic</option>
                    <option>Polo</option>
                    <option>V-neck</option>
                  </Form.Control>
                </div>

                <div className=" row group mt-1">
                  <Form.Label className="my-auto col-sm-3">Sleeve: </Form.Label>
                  <Form.Control
                    ref={input => formFields.sleeve = input}
                    as="select"
                    className="form-control col-md-6"
                    custom
                  >
                    <option>Short</option>
                    <option>Middle</option>
                    <option>Long</option>
                  </Form.Control>
                </div>

                <div className=" row group mt-1">
                  <Form.Label className="my-auto col-sm-3">Length: </Form.Label>
                  <Form.Control
                    ref={input => formFields.length = input}
                    as="select"
                    className="form-control col-md-6"
                    custom
                  >
                    <option> Mini </option>
                    <option> Above knee </option>
                    <option> Knee length </option>
                    <option> Cocktail </option>
                    <option> Midi </option>
                    <option> Maxi </option>
                    <option> Floor length </option>
                  </Form.Control>
                </div>

                <div className=" row group mt-1">
                  <Form.Label className="my-auto col-sm-3">Size: </Form.Label>
                  <Form.Control
                    ref={input => formFields.size = input}
                    as="select"
                    className="form-control col-md-6"
                    value={clothingSize}
                    onChange={this.handleClothingSizeChanged}
                    custom
                  >
                    <option value="" defaultChecked/>
                    <option value={XS}>{XS}</option>
                    <option value={S}>{S}</option>
                    <option value={M}>{M}</option>
                    <option value={L}>{L}</option>
                    <option value={XL}>{XL}</option>
                    <option value={XXL}>{XXL}</option>
                  </Form.Control>
                </div>

                <div className=" row group mt-1">
                  <h6 className="my-auto col-sm-3">Price: </h6>
                  <input
                    ref={input => formFields.price = input}
                    type="number"
                    name="price"
                    className="form-control col-md-6"
                  />
                </div>

                <div>
                  <button
                    className="btn btn-outline-primary mt-2"
                    onClick={this.handleClick}
                  >
                    Create order
                  </button>
                  {/* <input type="submit" value="Make order" className="btn btn-outline-primary mt-2"/> */}
                </div>
              </form>
            </div>

          <br/>
          <br/>

          <div className="col-lg ">
            {clothingSizeCalculator}
          </div>
        </div>

        </div>
      </div>
    );
  }
}

export default OrderNewOrder;
