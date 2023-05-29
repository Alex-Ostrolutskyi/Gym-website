import React from 'react'
import "./About.css"
import HeaderSecond from '../../Components/HeaderSecond'
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import IdeaImage from "../../images/about2.jpg"
import AimImage from "../../images/about3.jpg"
import SectionHead from '../../Components/SectionHead'
import {AiOutlineInfoCircle} from "react-icons/ai"
import { useInView } from 'react-intersection-observer'
const About = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const {ref: ideaRef, inView: ideaInWiew } = useInView({
    threshold:0.5,
    triggerOnce:true,
  })
  const {ref: aimRef, inView: aimInWiew } = useInView({
    threshold:0.5,
    triggerOnce:true,
  })
  return (
    <React.Fragment>
      <HeaderSecond title={"About us"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio molestiae facilis voluptate fugiat ullam.
      </HeaderSecond>
      <section ref={ref} className="container about__story ">
      <SectionHead icon={<AiOutlineInfoCircle/>} title={"Our Story"} />
        <div className="story__containter">
          <div className="story__image">
            {inView && <img src={StoryImage} className={`${inView && "about__active"}`} alt="" />}
          </div>
          <div className="story__content">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio eius ullam eaque sapiente odio distinctio blanditiis velit eos maxime nisi sint tempora, corrupti vel! Incidunt maiores natus vero! Ea!
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, incidunt unde odio libero esse pariatur maxime illum, reprehenderit magnam facere consequatur quidem? Delectus, quidem doloremque.</p>
          </div>
        </div>
      </section>
      <section ref={ideaRef} className="container idea__story ">
      <SectionHead icon={<AiOutlineInfoCircle/>} title={"Our Idea"} />
        <div className="story__containter idea">
          <div className="story__image">
            {ideaInWiew && <img src={IdeaImage} className={`${ideaInWiew && "idea__active"}`} alt="" />}
          </div>
          <div className="story__content">
            <h2>Our Idea</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nulla, explicabo dolorum repudiandae optio beatae nostrum! Architecto nam ratione animi, nostrum vel accusantium tempore iure.
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit amet cum id ipsa corrupti, libero nulla maiores explicabo inventore optio..</p>
          </div>
        </div>
      </section>
      <section ref={aimRef} className="container aim__story ">
      <SectionHead icon={<AiOutlineInfoCircle/>} title={"Our Aim"} />
        <div className="story__containter aim">
          <div className="story__image">
            {aimInWiew && <img src={AimImage} className={`${aimInWiew && "aim__active"}`} alt="" />}
          </div>
          <div className="story__content">
            <h2>Our Aim</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod vero nisi autem, assumenda ratione fugit nam esse provident incidunt rerum illo dicta consequuntur quisquam.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro eius doloribus autem sit! Rerum porro voluptas dolores corrupti quam.</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About