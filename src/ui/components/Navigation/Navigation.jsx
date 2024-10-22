import React from 'react'
import PropTypes from 'prop-types'
import menu from 'assets/icons/menu-icon.png'

const Navigation = ({ title }) => {
  return (
    <div className="navigation">
      <img src={menu} alt="menu" className="navigation-icon" />
      {title && <span className="navigation-title">{title}</span>}
    </div>
  )
}

Navigation.propTypes = {
  title: PropTypes.string,
}

export default Navigation
