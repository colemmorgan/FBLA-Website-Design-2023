import React, {useEffect, useState} from "react";
import { nfts } from "../Data";
import Nft from "./ui/nft";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";


 

const Trending = () => {
  const {ref, inView} = useInView({
    threshold: 0.3
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
      animation.start({x: '100vw', opacity:0})
    }
  }, [inView])

  return (
    <>
      <motion.div className="container" ref={ref}>
        <motion.div className="trending__row" animate={animation} transition={{repeat:1}}>
          <h1 className="section__title">Releasing Soon</h1>
          <div className="trending__list top">
            {nfts.filter((nft) => nft.duration).slice(0,4).map((nft) => (
              <Nft nft={nft} key={nft.id}/>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Trending;
