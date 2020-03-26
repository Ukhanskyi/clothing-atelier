import React from 'react'
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";


function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <Dropdown className="mw-25">
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className="mw-25">
          Man
        </Dropdown.Toggle>
        <Dropdown.Menu className="mw-25">
          <Dropdown.Item href="#/s">Coats</Dropdown.Item>
          <Dropdown.Item href="#/s">Jackets</Dropdown.Item>
          <Dropdown.Item href="#/s">Jeans</Dropdown.Item>
          <Dropdown.Item href="#/s">Jumpers</Dropdown.Item>
          <Dropdown.Item href="#/s">Hoodies</Dropdown.Item>
          <Dropdown.Item href="#/s">Shirts</Dropdown.Item>
          <Dropdown.Item href="#/s">Shorts</Dropdown.Item>
          <Dropdown.Item href="#/s">Suits</Dropdown.Item>
          <Dropdown.Item href="#/s">Sweaters</Dropdown.Item>
          <Dropdown.Item href="#/s">Ties</Dropdown.Item>
          <Dropdown.Item href="#/s">Trousers</Dropdown.Item>
          <Dropdown.Item href="#/s">T-Shirts</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          Woman
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/s">Coats</Dropdown.Item>
          <Dropdown.Item href="#/s">Dresses</Dropdown.Item>
          <Dropdown.Item href="#/s">Jackets</Dropdown.Item>
          <Dropdown.Item href="#/s">Jeans</Dropdown.Item>
          <Dropdown.Item href="#/s">Jumpers</Dropdown.Item>
          <Dropdown.Item href="#/s">Hoodies</Dropdown.Item>
          <Dropdown.Item href="#/s">Shirts</Dropdown.Item>
          <Dropdown.Item href="#/s">Shorts</Dropdown.Item>
          <Dropdown.Item href="#/s">Skirts</Dropdown.Item>
          <Dropdown.Item href="#/s">Suits</Dropdown.Item>
          <Dropdown.Item href="#/s">Sweaters</Dropdown.Item>
          <Dropdown.Item href="#/s">Trousers</Dropdown.Item>
          <Dropdown.Item href="#/s">T-Shirts</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Sidebar