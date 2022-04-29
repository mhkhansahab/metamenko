import React from 'react';
import metamenkoLogo from './../../Assets/Images/metamenko-logo.png';
import sushiLogo from './../../Assets/Images/sushi.png';
import classes from './style.module.css';
import { motion } from 'framer-motion';


function Index() {
  const containerOne = {
    hidden: { opacity: 0, x: -1000 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  }

  const containerTwo = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  }


  return (
    <div className={classes.section}>
      <div className={classes.sectionBody}>
        <motion.div
          variants={containerOne}
          initial="hidden"
          animate="show">
          <img src={metamenkoLogo} alt='Metamenko Logo' className={classes.metamenkoLogo} />
        </motion.div>
        <motion.div
          variants={containerTwo}
          initial="hidden"
          animate="show"
          className={classes.slogan}
          >
          <img src={sushiLogo} alt='Sushi' className={classes.sushiLogo} />
          <span>UNRAVEL THE MYSTERY</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Index
