import React from 'react'
import "./Plans.css"
import HeaderSecond from "../../Components/HeaderSecond"
import HeaderImage from "../../images/header_bg_4.jpg"
import {plans} from "../../data"
import Card from "../../UI/Card"
const Plans = () => {
  return (
    <>
    <HeaderSecond image={HeaderImage} title={"Our Plans"}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore esse veniam beatae error voluptas neque.
    </HeaderSecond>
    <section className="plans">
      <div className="container plans__container">
        <div className="plans__wrapper">
          {plans.map(({id, name, desc, price, features}) => {
            return (
              <Card key={id} className={`plan__${name.split(" ")[0]}`} >
                <h3>{name}</h3>
                <small>{desc}</small>
                <h2>{price}/month</h2>
                <ul>
                  {features.map(({feature, available},index) => {
                    return (
                        <li key={index} className={`${!available? "disabled" : ""}`}>{feature}</li>
                    )
                  })}
                </ul>
                <button className="btn lg">Choose</button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
    </>

  )
}

export default Plans