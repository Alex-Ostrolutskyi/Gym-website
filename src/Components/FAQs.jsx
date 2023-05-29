import React from 'react'
import SectionHead from './SectionHead'
import { faqs } from '../data'
import {AiOutlineQuestionCircle} from "react-icons/ai"
import FAQ from './FAQ'
import "./Faqs.css"
const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<AiOutlineQuestionCircle/>} title={"FAQ"} />
            <div className="faqs__wrapper">
              {faqs.map(({id, question, answer}) => {
                return <FAQ key={id} question={question} answer={answer}/>
              })}
            </div>  
        </div>
    </section>
  )
}

export default FAQs