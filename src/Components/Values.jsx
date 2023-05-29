import React from 'react'
import Image from "../images/values.jpg"
import { values } from '../data'
import Card from '../UI/Card'
import SectionHead from './SectionHead'
import {AiOutlineStar} from "react-icons/ai"
import "./values.css"
const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<AiOutlineStar/>} title={"Values"}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, mollitia voluptas vero consequatur quos ex.</p>
                <div className="values__wrapper">
                    {values.map(({id, icon, title, desc}) => {
                        return (
                            <Card className={"values__value"} key={id}>
                                <span>{icon}</span>
                                <h3>{title}</h3>
                                <small>{desc}</small>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values