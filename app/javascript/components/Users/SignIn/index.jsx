import React, { useState } from "react";
import "./styles.css";

export default function SignIn() {

  return (
    <div className="contant">
      <form>
        <h4 className="row justify-content-center"> Please login</h4>

        <div className=" row group mt-1">
          <h6 className="my-auto col-sm-3">Email: </h6>
          <input type="text" className="form-control col-md-6" />
        </div>

        <div className=" row group mt-1">
          <h6 className="my-auto col-sm-3">Password: </h6>
          <input type="password" className="form-control col-md-6" />
        </div>

        <div>
          <input type="submit" value="Login" className="btn btn-outline-primary mt-2" />
        </div>
      </form>
    </div>
  );
}