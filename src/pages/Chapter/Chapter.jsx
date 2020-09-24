import React from 'react'
import { useParams } from 'react-router-dom'
import ChapterContainer from '../../containers/Chapter/Chapter'

const Chapter = () => {
  const { chapterNumber } = useParams()

  return <ChapterContainer number={Number(chapterNumber)} />
}

export default Chapter
