import React from 'react'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import './home.scss' // TODO: move to the correct base.scss file

const Home = ({ header, paragraphs, author }) => {
  return (
    <div className="home">
      <div className="home-header">
        <Heading level={1} extraClass="home-headerTitle">
          <p>{header.title.firstLine}</p>
          <p>{header.title.secondLine}</p>
        </Heading>
        <img src={header.photo} alt="photoHome" />
      </div>
      <div className="home-body">
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </div>
      <p className="home-author">{author}</p>
    </div>
  )
}

// TODO: add propTypes and check the Object structure in props

export default Home
