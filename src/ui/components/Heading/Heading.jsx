import React from 'react'

const Heading = ({ level, title, extraClass }) => {
  const Head = `h${level}`

  // TODO: wait until classnames library is installed
  // const classes = cx('heading', `heading-${level}`, extraClass)

  return <Head>{title}</Head>
}

export default Heading
