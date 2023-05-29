import React from 'react'
import "./Gallery.css"
import HeaderSecond from "../../Components/HeaderSecond"
import BGImage from "../../images/header_bg_3.jpg"
const Gallery = () => {
  const arrLength = 15
  const imagesArr = []
  for (let i=1; i<=arrLength; i++) {
    imagesArr.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
    <HeaderSecond image={BGImage} title={"Gallery"}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sequi. Quibusdam quia sint vero optio.
    </HeaderSecond> 
    <section className="gallery">
      <div className="container gallery__container">
        <div className="gallery__wrapper">
          {imagesArr.map((images, index) => <article key={index}><img src={images} alt={`gallery image ${index}`} /></article>)}
        </div>
      </div>
    </section>
    </>
    
  )
}

export default Gallery