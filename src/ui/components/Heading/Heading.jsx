import React from 'react'
import cx from 'classnames'
import './heading.scss' // TODO: move to the base.scss file

const Heading = ({ children, extraClass, level }) => {
  const Head = `h${level}`
  const classes = cx('heading', extraClass)

  return <Head className={classes}>{children}</Head>
}

export default Heading