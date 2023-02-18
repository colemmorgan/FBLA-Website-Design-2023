import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faGem, faEye } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import wave from "../assets/wave.svg"


const Info = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  })
  const animation = useAnimation()

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (inView || counter >= 1){
      animation.start({
        x:0,
        opacity:1,
        transition: { type: 'spring', duration: 3.5, bounce:0.2}
      })
      setCounter((prevCounter) => (prevCounter) + 1)
    }
    if (!inView && counter === 0) {
      animation.start({x: '-100vw', opacity:0})
    }
  }, [inView])

  return (
    <section id="info">
      <div className="container">
        <div className="row info-row" ref={ref}>
          <motion.h1 className="section__title" animate={animation}>About Us</motion.h1>
          <motion.div  animate={animation} className="about__container">
            <div className="about">
              <div className="about__image">
                <FontAwesomeIcon icon={faBullseye}/>
              </div>
              <h2 className="about__title">Mission</h2>
              <p className="about__para">Our mission is to serve the members of the Gainesville community by creating collectable NFTs to promote pride in our community.</p>
              <img src={wave} alt="" className="wave"/>
            </div>
            <div className="about">
              <div className="about__image">
                <FontAwesomeIcon icon={faEye}/>
              </div>
              <h2 className="about__title">Vision</h2>
              <p className="about__para">Our vision is to create a community of Gainesville reidents that enjoy both NFTs and the city of Gainesville</p>
              <img src={wave} alt="" className="wave"/>
            </div>
            <div className="about">
              <div className="about__image">
                <FontAwesomeIcon icon={faGem}/>
              </div>
              <h2 className="about__title">Values</h2>
              <p className="about__para">We value fairness, equality, and fellowship. We are commited to giving you the best experience possible while abiding to our values.</p>
              <img src={wave} alt="" className="wave"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Info;
