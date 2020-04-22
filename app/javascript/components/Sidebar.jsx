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
                <NavLink to="/new">Coats</NavLink><br />
                <NavLink to="/new">Jackets</NavLink><br />
                <NavLink to="/new">Jeans</NavLink><br />
                <NavLink to="/new">Jumpers</NavLink><br />
                <NavLink to="/new">Hoodies</NavLink><br />
                <NavLink to="/new">Shirts</NavLink><br />
                <NavLink to="/new">Shorts</NavLink><br />
                <NavLink to="/new">Suits</NavLink><br />
                <NavLink to="/new">Sweaters</NavLink><br />
                <NavLink to="/new">Ties</NavLink><br />
                <NavLink to="/new">Trousers</NavLink><br />
                <NavLink to="/new"><nobr>T-Shirts</nobr></NavLink><br />
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
                <NavLink to="/new">Coats</NavLink><br />
                <NavLink to="/new">Dresses</NavLink><br />
                <NavLink to="/new">Jackets</NavLink><br />
                <NavLink to="/new">Jeans</NavLink><br />
                <NavLink to="/new">Jumpers</NavLink><br />
                <NavLink to="/new">Hoodies</NavLink><br />
                <NavLink to="/new">Shirts</NavLink><br />
                <NavLink to="/new">Shorts</NavLink><br />
                <NavLink to="/new">Skirts</NavLink><br />
                <NavLink to="/new">Suits</NavLink><br />
                <NavLink to="/new">Sweaters</NavLink><br />
                <NavLink to="/new">Trousers</NavLink><br />
                <NavLink to="/new"><nobr>T-Shirts</nobr></NavLink><br />
              </ul>
            </div>
          </Collapsible>
        </div>
      </div>
    );
  }
}
