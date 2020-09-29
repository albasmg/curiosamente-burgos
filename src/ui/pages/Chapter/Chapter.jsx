import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'ui/components/Carousel/Carousel'
import Heading from 'ui/components/Heading/Heading'
import Paragraph from 'ui/components/Paragraph/Paragraph'

const Chapter = ({ header, number, quote, paragraphs, photos }) => {
  return (
    <div className="chapter">
      <div className="chapter-header">
        <Heading level={1} extraClass="chapter-headerTitle">
          {number}
        </Heading>
        <Heading level={2} extraClass="chapter-headerSubtitle">
          <p>{header.subtitle.firstLine}</p>
          <p>{header.subtitle.secondLine}</p>
        </Heading>
      </div>
      <Carousel photos={photos} />
      <>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </>
      <p>{quote}</p>
    </div>
  )
}

// TODO: add missing propTypes
Chapter.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Chapter
