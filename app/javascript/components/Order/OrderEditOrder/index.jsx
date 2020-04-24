import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './styles'

const OrderEditOrder = ({current_user}) => (
    <div><h2>Edit {current_user.name}'s {current_user.surname} order</h2></div>
)

OrderEditOrder.defaultProps = {
    name: 'Incognito'
}

OrderEditOrder.propTypes = {
    name: PropTypes.string
}

export default OrderEditOrder
