import React, {useState} from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"

const FAQ = ({question, answer}) => {
  const [IsShown, setIsShown] = useState(false)
  const toggleHandler = () => {
    setIsShown(prev => !prev)
  }
  return (
    <article className="faq" onClick={toggleHandler}>
        <div>
            <h3>{question}</h3>
            <button className="faq__icon"  >{IsShown? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </div>
        {IsShown && <p className="faq__answer">{answer}</p>}
    </article>
  )
}

export default FAQ
