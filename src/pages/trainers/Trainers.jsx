import React from 'react'
import { trainers } from '../../data'
import HeaderSecond from '../../Components/HeaderSecond'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai"
import HeaderImage from "../../images/header_bg_5.jpg"
import "./Trainers.css"
import Trainer from '../../Components/Trainer'
const Trainers = () => {
  return (
    <>
    <HeaderSecond image={HeaderImage} title={"Trainers"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio rerum tempore voluptatibus fugiat atque?</HeaderSecond>
    <section className="trainers">
      <div className="container trainers__container">
        {trainers.map(({id, image, name, job, socials}) => {
          return (
            <Trainer key={id} image={image} name={name} job={job} socials={[
            {
              icon: <AiFillInstagram/>, link: socials[0]
            },
            {
              icon: <AiFillTwitterCircle/>, link: socials[1]
            },
            {
              icon: <AiFillFacebook/>, link: socials[2]
            },
            {
              icon: <AiFillLinkedin/>, link: socials[3]
            }
            ]}></Trainer>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Trainers