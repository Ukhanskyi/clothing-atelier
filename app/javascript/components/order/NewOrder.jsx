import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import CountClothingSize from './CountClothingSize.jsx'

const NewOrder = ({ current_user }) => (
  <div className=" row content">
    <div className="col-lg">
      <h3 className="row justify-content-center">New order</h3>
      <br/>

      <div className="row">
        <div className="col-sm-11">
          <form>
            <div className=" row group mt-1">
              <h6 className="my-auto col-sm-3">Name: </h6>
              <input type="text" className="form-control col-md-6" />
            </div>

            <div className=" row group mt-1">
              <h6 className="my-auto col-sm-3">Surame: </h6>
              <input type="text" className="form-control col-md-6" />
            </div>

            <div className=" row group mt-1">
              <h6 className="my-auto col-sm-3">Email: </h6>
              <input type="text" className="form-control col-md-6" />
            </div>

            <div className=" row group mt-1">
              <h6 className="my-auto col-sm-3">Phone: </h6>
              <input type="number" className="form-control col-md-6" />
            </div>

            <div className=" row group mt-1">
              <h6 className="my-auto col-sm-3">Address: </h6>
              <input type="text" className="form-control col-md-6" />
            </div>

            <div className="row group mt-1">
              <h6 className="my-auto col-sm-3">Your gender: </h6>
              <input type="radio" value="male" className="mt-1" /> Male
            <input type="radio" value="female" className="ml-3 mt-1" /> Female
          </div>

            <div className=" row group mt-1">
              <h6 className="my-auto col-sm-3">Clothing name: </h6>
              <input type="text" placeholder='Please enter clothing name' className="form-control col-md-6" />
            </div>

            <div className=" row group mt-1">
              <Form.Label className="my-auto col-sm-3">Colour:</Form.Label>
              <Form.Control as="select" className="form-control col-md-6" custom>
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
              <Form.Control as="select" className="form-control col-md-6" custom>
                <option>Basic</option>
                <option>Polo</option>
                <option>V-neck</option>
              </Form.Control>
            </div>

            <div className=" row group mt-1">
              <Form.Label className="my-auto col-sm-3">Sleeve: </Form.Label>
              <Form.Control as="select" className="form-control col-md-6" custom>
                <option>Short</option>
                <option>Middle</option>
                <option>Long</option>
              </Form.Control>
            </div>

            <div className=" row group mt-1">
              <Form.Label className="my-auto col-sm-3">Length: </Form.Label>
              <Form.Control as="select" className="form-control col-md-6" custom>
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
              <Form.Control as="select" className="form-control col-md-6" custom>
                <option> XS </option>
                <option> S </option>
                <option> M </option>
                <option> L </option>
                <option> XL </option>
                <option> XXL </option>
              </Form.Control>
            </div>

            <div className=" row group mt-1">
              <h6 className="my-auto col-sm-3">Price: </h6>
              <input type="number" name="price" className="form-control col-md-6" />
            </div>

            <div>
              <input type="submit" value="Make order" className="btn btn-outline-primary mt-2"/>
            </div>
          </form>
        </div>

      <br/>
      <br/>

      <div className="col-lg ">
        <CountClothingSize />
      </div>
    </div>

    </div>
  </div>
)

export default NewOrder
