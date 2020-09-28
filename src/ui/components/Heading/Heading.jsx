import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Heading = ({ children, extraClass, level }) => {
  const Head = `h${level}`
  const classes = cx('heading', `heading-${level}`, extraClass)

  return <Head className={classes}>{children}</Head>
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  extraClass: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
}

export default Heading
