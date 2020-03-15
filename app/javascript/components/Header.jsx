import React from 'react'

const Header = () => {
  return (
    <div className="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <button type="button" id="sidebarCollapse" className="my-0 mr-md-auto btn btn-light">
        <h5 className="my-0 mr-md-auto font-weight-bold">CLOTHING ATELIER</h5>
      </button>

      <nav className="my-2 my-md-0 mr-md-3">
        <a href='/' className="p-2 text-dark">Home</a>
        <a href='#s' className="p-2 text-dark">About us</a>
      </nav>
    </div>
  );
}

export default Header
