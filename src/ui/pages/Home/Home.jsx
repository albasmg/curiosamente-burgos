import React from 'react'
import Heading from 'ui/components/Heading/Heading'
import Paragraph from 'ui/components/Paragraph/Paragraph'

const Home = ({ header, paragraphs, author }) => {
  return (
    <div className="home">
      <div>
        <Heading level={1} extraClass="home-headerTitle">
          <p>{header.title.firstLine}</p>
          <p>{header.title.secondLine}</p>
        </Heading>
        <img src={header.photo} alt="photoHome" />
      </div>
      <div>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </div>
      <p>{author}</p>
    </div>
  )
}

// TODO: add propTypes and check the Object structure in props

export default Home
