import React from 'react'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'

const Home = ({ header, paragraphs, author }) => {
  return (
    <div className="home">
      <div className="home-header">
        <Heading level={1} title={header.title.firstLine} />
        <Heading level={1} title={header.title.secondLine} />
        <img src={header.photo} alt="photoHome" />
      </div>
      <div className="home-body">
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index} text={paragraph} />
        ))}
      </div>
      <p className="home-author">{author}</p>
    </div>
  )
}

// TODO: add propTypes and check the Object structure in props

export default Home
