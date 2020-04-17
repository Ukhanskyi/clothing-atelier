import React from 'react'
import CountClothingSize from './CountClothingSize.jsx'

const NewOrder = ({ current_user }) => (
  <div className="content w-75 p-3">
    <div>
      <h3 className="row justify-content-center">New order</h3>
      <br/>

      <form>
        <div className=" row group mt-1">
          <h6 className="my-auto col-sm-3">Name: </h6>
          <input type="text" name="name" defaultValue={current_user.name} className="form-control col-md-6" />
        </div>

        <div className=" row group mt-1">
          <h6 className="my-auto col-sm-3">Surame: </h6>
          <input type="text" name="surname" defaultValue={current_user.surname} className="form-control col-md-6" />
        </div>

        <div className=" row group mt-1">
          <h6 className="my-auto col-sm-3">Email: </h6>
          <input type="text" name="email" defaultValue={current_user.email} className="form-control col-md-6" />
        </div>

        <div className=" row group mt-1">
          <h6 className="my-auto col-sm-3">Phone: </h6>
          <input type="number" name="phone" defaultValue={current_user.phone} className="form-control col-md-6" />
        </div>

        <div className=" row group mt-1">
          <h6 className="my-auto col-sm-3">Address: </h6>
          <input type="text" name="address" defaultValue={current_user.address} className="form-control col-md-6" />
        </div>
      </form>

      <CountClothingSize />

    </div>
  </div>
)

export default NewOrder
