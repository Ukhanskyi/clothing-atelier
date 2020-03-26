import React from 'react'
import { NavLink } from "react-router-dom"
import Sidebar from './Sidebar.jsx'

const Header = () => {
  return (
    <div className="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      {/* <link to='/edit' > */}

      <button type="button" id="sidebarCollapse" className="my-0 mr-md-auto btn btn-light">
        <h5 className="my-0 mr-md-auto font-weight-bold">CLOTHING ATELIER</h5>
      </button>

      {/* <button type="button" id="sidebarCollapse" className="my-0 mr-md-auto btn btn-light">
        <h5 className="my-0 mr-md-auto font-weight-bold">CLOTHING ATELIER</h5>
      </button> */}
      {/* </link> */}

      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink to='/' className="p-2 text-dark">Home </NavLink>
        <NavLink to='/about' className="p-2 text-dark">About us </NavLink>
        <NavLink to='/orders' className="p-2 text-dark">Basket </NavLink>
      </nav>
    </div>
  );
}

export default Header
