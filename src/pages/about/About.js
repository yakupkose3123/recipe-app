import React from 'react';
import Styles from "./About.module.css";
import {ReactComponent as CoddingSvg} from "../../assets/coding.svg";



const About = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.icon}>
            <CoddingSvg />
        </div>
        
        <h2 style={{fontSize:"1.2rem"}}>About Software Developer: <span className={Styles.headerSpan}>JKBKSE</span></h2>
        <div className={Styles.aboutMe}>
            <h3>Hi, I'am Jacob J.</h3>
            <h4>I'm currently learning Full-Stack Development Languages.</h4>
            <h5>I know JavaScript, ReactJs, Django, NodeJs, SQL, Python, Linux, Git/GitHub, Agile/Kanban/Scrum, OOP</h5>
            <h3><span>Send Email : </span>ykose3123@gmail.com</h3>
        </div>
    </div>
  )
}

export default About