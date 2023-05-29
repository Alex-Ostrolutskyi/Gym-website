import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../images/main_header.png"
import "../index.css"
import "./Header.css"
const Header = () => {
  return (
    <>
    <main className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
                <h4>
                #100daysOfWorkOutsChallenge
                </h4>
                <h1>Join to our gym</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum voluptate amet ducimus vero.</p>
                <Link to="plans" className="btn lg">Get started</Link>
            </div>
            <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Header