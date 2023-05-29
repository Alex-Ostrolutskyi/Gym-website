import React from 'react'
import "./Contacts.css"
import {AiOutlineMessage, AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
import HeaderSecond from "../../Components/HeaderSecond"
import SecondHeaderImage from "../../images/header_bg_2.jpg"
const Contacts = () => {
  return (
    <>
    <HeaderSecond image={SecondHeaderImage} title={"Contact us"}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia possimus earum! Ducimus, sapiente voluptatum!
    </HeaderSecond>
    <section className="contact">
      <div className="container contact__container">
        <div className="container__wrapper">
          <a href="mailto: abc@example.com" target="_blank"><AiOutlineMessage/></a>
          <a href="https://telegram.org/"target="_blank" ><AiOutlineMail/></a>
          <a href="tel:+123-456-789-0" target="_blank"><AiOutlinePhone/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contacts