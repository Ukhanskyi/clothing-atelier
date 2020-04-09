import React from 'react'
import { NavLink } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import Collapsible from './Collapsible'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Collapsible button={
            <button className="menu btn btn-light">
              <div>
                <FontAwesome
                  className="fa fa-male mr-2"
                  name="male"
                  size="2x"
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
                Man clothes
              </div>
            </button>
          }>
            <div>
              <ul>
                <NavLink to="#/s">Coats</NavLink><br />
                <NavLink to="#/s">Jackets</NavLink><br />
                <NavLink to="#/s">Jeans</NavLink><br />
                <NavLink to="#/s">Jumpers</NavLink><br />
                <NavLink to="#/s">Hoodies</NavLink><br />
                <NavLink to="#/s">Shirts</NavLink><br />
                <NavLink to="#/s">Shorts</NavLink><br />
                <NavLink to="#/s">Suits</NavLink><br />
                <NavLink to="#/s">Sweaters</NavLink><br />
                <NavLink to="#/s">Ties</NavLink><br />
                <NavLink to="#/s">Trousers</NavLink><br />
                <NavLink to="#/s"><nobr>T-Shirts</nobr></NavLink><br />
              </ul>
            </div>
          </Collapsible>
        </div>

        <div>
          <Collapsible button={
            <button className="menu btn btn-light">
              <div>
                <FontAwesome
                  className="fa fa-female mr-2"
                  name="female"
                  size="2x"
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
                Woman clothes
              </div>
            </button>
          }>
            <div>
              <ul>
                <NavLink to="#/s">Coats</NavLink><br />
                <NavLink to="#/s">Dresses</NavLink><br />
                <NavLink to="#/s">Jackets</NavLink><br />
                <NavLink to="#/s">Jeans</NavLink><br />
                <NavLink to="#/s">Jumpers</NavLink><br />
                <NavLink to="#/s">Hoodies</NavLink><br />
                <NavLink to="#/s">Shirts</NavLink><br />
                <NavLink to="#/s">Shorts</NavLink><br />
                <NavLink to="#/s">Skirts</NavLink><br />
                <NavLink to="#/s">Suits</NavLink><br />
                <NavLink to="#/s">Sweaters</NavLink><br />
                <NavLink to="#/s">Trousers</NavLink><br />
                <NavLink to="#/s"><nobr>T-Shirts</nobr></NavLink><br />
              </ul>
            </div>
          </Collapsible>
        </div>
      </div>
    );
  }
}
