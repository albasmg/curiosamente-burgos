import texts from 'data/chapters/chapter-1/texts.json'
import photo1 from 'assets/images/chapters/chapter-1/CAP1_1.jpg'
import photo2 from 'assets/images/chapters/chapter-1/CAP1_2.jpg'
import photo3 from 'assets/images/chapters/chapter-1/CAP1_3.jpg'
import photo4 from 'assets/images/chapters/chapter-1/CAP1_4.jpg'
import photo5 from 'assets/images/chapters/chapter-1/CAP1_5.jpg'
import photo6 from 'assets/images/chapters/chapter-1/CAP1_6.jpg'

const getChapterOneData = () => ({
  texts,
  photos: [photo1, photo2, photo3, photo4, photo5, photo6],
})

export default getChapterOneData
