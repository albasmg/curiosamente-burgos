import React from 'react'
import PropTypes from 'prop-types'
import Heading from 'ui/components/Heading/Heading'
import Paragraph from 'ui/components/Paragraph/Paragraph'

const Home = ({ author, header, paragraphs }) => {
  return (
    <div className="home">
      <div className="home-container">
        <Heading level={1} extraClass="home-headerTitle">
          <p>{header.title.firstLine}</p>
          <p>{header.title.secondLine}</p>
        </Heading>
        <img className="home-image" src={header.photo} alt="photoHome" />
      </div>
      <Heading level={2} extraClass="home-headerSubtitle">
        <p>{header.subtitle.firstLine}</p>
        <p>{header.subtitle.secondLine}</p>
        <p>{header.subtitle.thirdLine}</p>
      </Heading>
      <>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </>
      <p className="home-author">{author}</p>
    </div>
  )
}

Home.propTypes = {
  author: PropTypes.string.isRequired,
  header: PropTypes.shape({
    title: PropTypes.shape({
      firstLine: PropTypes.string.isRequired,
      secondLine: PropTypes.string.isRequired,
    }).isRequired,
    subtitle: PropTypes.shape({
      firstLine: PropTypes.string.isRequired,
      secondLine: PropTypes.string.isRequired,
      thirdLine: PropTypes.string.isRequired,
    }).isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Home
