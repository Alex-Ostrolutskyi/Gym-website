import React, {useState} from 'react'
import SectionHead from './SectionHead'
import { testimonials } from '../data'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {BsPersonVcard} from "react-icons/bs"
import {GoPrimitiveDot} from "react-icons/go"
import Card from '../UI/Card'
import "./feedback.css"
const Feedbacks = () => {
    const [curentIndex, setCurrentIndex] = useState(0)
    const {id, name, quote, job, avatar} = testimonials[curentIndex]
    const goToPrevSlide = () => {
        setCurrentIndex((curentIndex) => curentIndex - 1)
        if (curentIndex === 0) {
            setCurrentIndex(testimonials.length - 1)
        }
    }
    const goToNextSlide = () => {
        setCurrentIndex((curentIndex) => curentIndex + 1)
        if (curentIndex === testimonials.length - 1 ) {
            setCurrentIndex(0)
        }
    }
    const goToSlide = (index) => {
        setCurrentIndex(index)
    }
  return (
    <section className="feedbacks">
        <div className="container feedbacks__container">
            <SectionHead icon={<BsPersonVcard/>} title={"Feedback"}/>
            <Card className={"feedback"}>
                <div className="feedback__image">
                    <img src={avatar} alt="" />
                </div>
                <p>
                {quote}
                </p>
                <h4>{name}</h4>
                <small>
                {job}
                </small>
                <div className="feedback_btn left" onClick={goToPrevSlide}>
                    <AiOutlineArrowLeft/>
                </div>
                <div className="feedback_btn right" onClick={goToNextSlide}>
                    <AiOutlineArrowRight/>
                </div>
            </Card>
            <div className="feedback__dots">
                {testimonials.map((_, index) => <div className={`feedback__dot ${curentIndex === index ? "active" : ""} `} key={index} onClick={() =>goToSlide(index)} ><GoPrimitiveDot/></div> )}
            </div>
        </div>
    </section>
  )
}

export default Feedbacks