import React from 'react'
import Collapsible from '../Collapsible'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const CountClothingSize = () => (
  <div>
    <div>
      <Collapsible button={
        <div class="row justify-content-end">
          <button className="menu btn btn-light"> Calculate my size </button>
        </div>
      }>
        <div className="container">
          <h4 class="row justify-content-center"> You can calculate your size here </h4>

        </div>
      </Collapsible>
    </div>
  </div>
)

export default CountClothingSize