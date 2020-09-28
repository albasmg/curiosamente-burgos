import React from 'react'
import PropTypes from 'prop-types'

const Pharagraph = ({ children }) => {
  return <p className="paragraph">{children}</p>
}

Pharagraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Pharagraph
