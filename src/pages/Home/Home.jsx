import React from 'react'
import getHomeData from '../../data/home/getHomeData'
import HomeView from '../../ui/views/Home/Home'

const Home = () => {
  const { texts, photo } = getHomeData()

  return (
    <HomeView
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
