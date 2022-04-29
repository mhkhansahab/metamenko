import React from 'react';
import classes from './style.module.css';
import { motion } from 'framer-motion';

function Index({ name, profession, img, index, handleClick }) {
    const cardVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 0,
            transition: {
                delay: index/7,
                type: "spring",
                bounce: 0.4,
                duration: .3,
            }
        }
    };

    return (
        <motion.div variants={cardVariants} whileHover={{ scale: 1.2 }} whileTap={{scale: 1.0}} className={classes.card} onClick={() => handleClick(index)}>
            <div className={classes.name}>{name}</div>
            <div className={classes.profession}>{profession}</div>
            <div className={classes.img}><img src={img} alt='dragon' /></div>
        </motion.div>
    )
}

export default Index
