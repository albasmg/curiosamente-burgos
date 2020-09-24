import React from 'react'
import getChapterOneData from '../../data/chapters/chapter-1/getChapterOneData'

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

const Chapter = ({ number }) => {
  console.log(CHAPTERS_INFO[number])

  if (!VALID_CHAPTER_NUMBERS.includes(number))
    return 'El número del capítulo no existe. Bla bla bla'

  return <p>I'm the Chapter container component. Number: {number}</p>
}

export default Chapter
