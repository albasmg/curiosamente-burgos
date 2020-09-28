import React from 'react'
import getHomeData from 'data/home/getHomeData'
import HomePage from 'ui/pages/Home/Home'

const Home = () => {
  const { texts, photo } = getHomeData()

  return (
    <HomePage
      author={texts.body.author}
      header={{
        title: texts.header.title,
        subtitle: texts.header.subtitle,
        photo: photo,
      }}
      paragraphs={texts.body.paragraphs}
    />
  )
}

export default Home
