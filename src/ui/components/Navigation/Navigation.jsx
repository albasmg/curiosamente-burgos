import React from 'react'
import PropTypes from 'prop-types'
import menu from 'assets/icons/menu-icon.png'

const Navigation = ({ title }) => {
  return (
    <>
      <img src={menu} alt="menu" className="navigation-icon" />
      {title && <span>{title}</span>}
    </>
  )
}

Navigation.propTypes = {
  title: PropTypes.string,
}

export default Navigation
