import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to={""} className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            tempora exercitationem dignissimos accusamus quaerat!
          </p>
          <div className="footer__container-list">
            <h3>Social media</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="https://www.linkedin.com" target="_blank">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.facebook.com" target="_blank">
                  <AiFillFacebook />
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.instagram.com" target="_blank">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li className="footer__item">
                <a href="https://twitter.com" target="_blank">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.youtube.com" target="_blank">
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="footer__item">
                <a href="https://github.com/Alex-Ostrolutskyi" target="_blank">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <h3>Permalinks</h3>
          <div className="footer__permalinks">
            <Link to={""}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"gallery"}>Gallery</Link>
            <Link to={"plans"}>Plans</Link>
            <Link to={"trainers"}>Trainers</Link>
            <Link to={"contact"}>Contact</Link>
          </div>
        </article>
        <article>
          <h3>Contacts</h3>
          <div className="footer__contacts">
            <a href="mailto: abc@example.com">abc@example.com</a>
            <a href="tel:+123-456-789-0">+123-456-789-0</a>
          </div>
        </article>
        <div className="footer__copyright">
          <small>Oleksii Ostrolutskyi &copy; 2023</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
