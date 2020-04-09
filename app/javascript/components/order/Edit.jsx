import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Edit = ({current_user}) => (
    <div><h2>Edit {current_user.name}'s {current_user.surname} order</h2></div>
)

Edit.defaultProps = {
    name: 'Incognito'
}

Edit.propTypes = {
    name: PropTypes.string
}

export default Edit
