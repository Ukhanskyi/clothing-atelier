import React from 'react'
import Collapsible from '../Collapsible'

const CountClothingSize = () => (
  <div>
    <br />
    <Collapsible button={
      <div>
        <button className="menu btn btn-light"> Calculate my size </button>
      </div>
    }>
      <div className="container col-sm-9">
        <br />
        <h4 className="row justify-content-center"> You can calculate your size here </h4>
        <br/>
        <form>
          <div className=" row group mt-1">
            <h6 className="my-auto col-sm-3">Height: </h6>
            <input type="number" name="height" placeholder='In centimeters' className="form-control col-md-6" />
          </div>

          <div className=" row group mt-1">
            <h6 className="my-auto col-sm-3">Breast circumference: </h6>
            <input type="number" name="breast" placeholder='In centimeters' className="form-control col-md-6" />
          </div>

          <div className=" row group mt-1">
            <h6 className="my-auto col-sm-3">Waist circumference: </h6>
            <input type="number" name="waist" placeholder='In centimeters' className="form-control col-md-6" />
          </div>

          <div className=" row group mt-1">
            <h6 className="my-auto col-sm-3">Tight circumference: </h6>
            <input type="number" name="tight" placeholder='In centimeters' className="form-control col-md-6" />
          </div>

          <div>
            <input type="submit" value="Calculate" className="btn btn-outline-primary mt-2"/>
          </div>

        </form>
        <br/>
      </div>
    </Collapsible>
  </div>
)

export default CountClothingSize