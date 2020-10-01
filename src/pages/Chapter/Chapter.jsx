import React from 'react'
import { useParams } from 'react-router-dom'
import getChapterOneData from 'data/chapters/chapter-1/getChapterOneData'
import ChapterPage from 'ui/pages/Chapter/Chapter'
import { CHAPTERS_NUMBER } from 'constants.js'

const CHAPTERS_INFO = {
  [CHAPTERS_NUMBER.ONE]: getChapterOneData(),
}

const Chapter = () => {
  const { chapterNumber: chapterNumberText } = useParams()
  const number = Number(chapterNumberText)

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
