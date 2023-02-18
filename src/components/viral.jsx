import React, {useEffect, useState} from "react";
import { nfts } from "../Data";
import Nft from "./ui/nft";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";


 

const Viral = () => {
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
    <section className="trending">
      <motion.div className="container" ref={ref}>
        <motion.div className="trending__row" animate={animation}>
          <h1 className="section__title">Trending NFTs</h1>
          <div className="trending__list">
            {nfts.filter((nft) => nft.rating===5).slice(0,4).map((nft) => (
              <Nft nft={nft} key={nft.id}/>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Viral;
