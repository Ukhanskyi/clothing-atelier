import React from 'react'
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import Collapsible from '../Collapsible'
import {
  COAT,
  DRESS,
  JACKET,
  JEANS,
  JUMPER,
  HOODIE,
  SHIRT,
  SHORTS,
  SKIRT,
  SUIT,
  SWEATER,
  TROUSERS,
  TSHIRT,
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
                      type: COAT,
                      gender: MAN,
                    }
                  }}
                >
                  Coat
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
                  Jacket
                </Link>
                <br />

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
                      type: JUMPER,
                      gender: MAN,
                    }
                  }}
                >
                  Jumper
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
                  Hoodie
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
                  Shirt
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SHORTS,
                      gender: MAN,
                    }
                  }}
                >
                  Shorts
                </Link>
                <br />


                {/* <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SKIRT,
                      gender: MAN,
                    }
                  }}
                >
                  Swith skirt
                </Link>
                <br /> */}

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SUIT,
                      gender: MAN,
                    }
                  }}
                >
                  Suit
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
                      type: TROUSERS,
                      gender: MAN,
                    }
                  }}
                >
                  Trousers
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
                      type: COAT,
                      gender: WOMAN,
                    }
                  }}
                >
                  Coat
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: DRESS,
                      gender: WOMAN,
                    }
                  }}
                >
                  Dress
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
                  Jacket
                </Link>
                <br />

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
                      type: JUMPER,
                      gender: WOMAN,
                    }
                  }}
                >
                  Jumper
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
                  Hoodie
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
                  Shirt
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SHORTS,
                      gender: WOMAN,
                    }
                  }}
                >
                  Shorts
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SKIRT,
                      gender: WOMAN,
                    }
                  }}
                >
                  Skirt
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: SUIT,
                      gender: WOMAN,
                    }
                  }}
                >
                  Suit
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
                  Sweater
                </Link>
                <br />

                <Link
                  to={{
                    pathname: '/new-order',
                    state: {
                      type: TROUSERS,
                      gender: WOMAN,
                    }
                  }}
                >
                  Trousers
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

              </ul>
            </div>
          </Collapsible>
        </div>
      </div>
    );
  }
}
