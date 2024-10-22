import React from 'react'
import { useParams } from 'react-router-dom'
import getChapterOneData from 'data/chapters/chapter-1/getChapterOneData'
import ChapterPage from 'ui/pages/Chapter/Chapter'

const CHAPTERS_NAME = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
}
const VALID_CHAPTER_NUMBERS = [
  CHAPTERS_NAME.ONE,
  CHAPTERS_NAME.TWO,
  CHAPTERS_NAME.THREE,
  CHAPTERS_NAME.FOUR,
  CHAPTERS_NAME.FIVE,
]
const CHAPTERS_INFO = {
  [CHAPTERS_NAME.ONE]: getChapterOneData(),
}

const Chapter = () => {
  const { chapterNumber: chapterNumberText } = useParams()
  const number = Number(chapterNumberText)

  if (!VALID_CHAPTER_NUMBERS.includes(number))
    return 'El número del capítulo no existe. Bla bla bla'

  return (
    <ChapterPage
      header={CHAPTERS_INFO[number].texts.header}
      number={chapterNumberText.padStart(2, '0')}
      quote={CHAPTERS_INFO[number].texts.body.quote}
      paragraphs={CHAPTERS_INFO[number].texts.body.paragraphs}
      photos={CHAPTERS_INFO[number].photos}
    />
  )
}

export default Chapter
