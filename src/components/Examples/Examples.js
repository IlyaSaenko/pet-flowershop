// import React from "react";
// import bouquetOne from '../../../src/images/bouquet1.jpg';
// import bouquetTwo from '../../../src/images/bouquet2.jpg';
// import bouquetThree from '../../../src/images/bouquet5.jpg';
// import bouquetFour from '../../../src/images/bouquet6.jpg';
// import bouquetFife from '../../../src/images/bouquet13.jpg';
// import bouquetSix from '../../../src/images/bouquet9.jpg';
// import bouquetSeven from '../../../src/images/bouquet11.jpg';
// import bouquetEight from '../../../src/images/bouquet12.jpg';

// function Examples() {
// 	return(
// 		<section className="examples">
// 			<h1 className="examples__title">Наши работы</h1>
// 			<div className="examples__photo">
// 				<img className="examples__image" src={bouquetOne} alt="Букет цветов"></img>
// 				<img className="examples__image" src={bouquetTwo} alt="Букет цветов"></img>
// 				<img className="examples__image" src={bouquetThree} alt="Букет цветов"></img>
// 				<img className="examples__image" src={bouquetFour} alt="Букет цветов"></img>
// 				<img className="examples__image" src={bouquetFife} alt="Букет цветов"></img>
// 				<img className="examples__image" src={bouquetSix} alt="Букет цветов"></img>
// 				<img className="examples__image" src={bouquetSeven} alt="Букет цветов"></img>
// 				<img className="examples__image" src={bouquetEight} alt="Букет цветов"></img>
// 			</div>
// 		</section>
// 	)
// }

// export default Examples;

import React from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const Examples = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <section className="examples">
			<h1 className="examples__title">Наши работы</h1>
      {openModal && 
        <div className='examples__slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='examples__button-close' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='examples__button-prev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='examples__button-next' onClick={nextSlide} />
          <div className='examples__full-screen'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='examples__gallery'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='examples__image' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Examples;