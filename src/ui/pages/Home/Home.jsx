import React from 'react'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'

const Home = ({ header, paragraphs, author }) => {
  return (
    <div className="home">
      <div className="home-container">
        <Heading level={1} extraClass="home-headerTitle">
          <p>{header.title.firstLine}</p>
          <p>{header.title.secondLine}</p>
        </Heading>
        <img className="image" src={header.photo} alt="photoHome" />
      </div>
      <Heading level={2} extraClass="home-headerSubtitle">
        <p>{header.subtitle.firstLine}</p>
        <p>{header.subtitle.secondLine}</p>
        <p>{header.subtitle.thirdLine}</p>
      </Heading>
      <div>
        {paragraphs.map((paragraph, index) => (
          <Paragraph extraClass="home-paragraph" key={index}>
            {paragraph}
          </Paragraph>
        ))}
      </div>
      <p>{author}</p>
    </div>
  )
}

// TODO: add propTypes and check the Object structure in props

export default Home
