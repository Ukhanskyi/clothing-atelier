import React from 'react'
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import Collapsible from '../Collapsible'
import {
  JEANS,
  HOODIE,
  SWEATER,
  SHIRT,
  TSHIRT,
  JACKET,
  MAN,
  WOMAN,
} from '../../types';
import './styles'

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
              <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: JEANS,
                      gender: MAN,
                    }
                  }}
                >
                  Jeans
                </Link>
                <br />
                
                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: HOODIE,
                      gender: MAN,
                    }
                  }}
                >
                  Hoodies
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SWEATER,
                      gender: MAN,
                    }
                  }}
                >
                  Sweaters
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SHIRT,
                      gender: MAN,
                    }
                  }}
                >
                  Shirts
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: TSHIRT,
                      gender: MAN,
                    }
                  }}
                >
                  <nobr>T-Shirt</nobr>
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: JACKET,
                      gender: MAN,
                    }
                  }}
                >
                  Jackets
                </Link>
                <br />
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
                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: JEANS,
                      gender: WOMAN,
                    }
                  }}
                >
                  Jeans
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: HOODIE,
                      gender: WOMAN,
                    }
                  }}
                >
                  Hoodies
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SWEATER,
                      gender: WOMAN,
                    }
                  }}
                >
                  Sweaters
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SHIRT,
                      gender: WOMAN,
                    }
                  }}
                >
                  Shirts
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: TSHIRT,
                      gender: WOMAN,
                    }
                  }}
                >
                  <nobr>T-Shirt</nobr>
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: JACKET,
                      gender: WOMAN,
                    }
                  }}
                >
                  Jackets
                </Link>
                <br />
              </ul>
            </div>
          </Collapsible>
        </div>
      </div>
    );
  }
}
