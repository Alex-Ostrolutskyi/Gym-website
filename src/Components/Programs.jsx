import React from 'react'
import {BiCrown} from "react-icons/bi"
import {AiFillCaretRight} from "react-icons/ai"
import SectionHead from './SectionHead'
import {programs} from "../data"
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import "./Programs.css"
const Programs = () => {
  return (
    <section className="prorgams">
      <div className="container programs__container">
        <SectionHead icon={<BiCrown/>} title={"Programs"}/>
      <div className="programs__wrapper">
        {programs.map(({icon, title, info, path, id}) => {
          return ( 
          <Card className="programs__program" key={id} >
            <span>{icon}</span>
            <h3>{title}</h3>
            <small>{info}</small>
            <Link to={path} className='btn sm'>Learn more <AiFillCaretRight/> </Link>
          </Card>
          )
        })}
      </div>
      </div>
    </section>
  )
}

export default Programs