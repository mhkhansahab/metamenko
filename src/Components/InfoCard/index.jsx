import React from 'react';
import classes from './style.module.css';
import { motion } from 'framer-motion';

function Index({ index, title, img, handleClick }) {
    const cardVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: index / 3,
            }
        }
    };

    return (
        <motion.div variants={cardVariants} whileHover={{ scale: 1.2, zIndex: 5 }} whileTap={{scale: 1.0}} className={classes.card} onClick={() => handleClick(Number(index) - 1)}>
            <div className={classes.index}>{index}</div>
            <div className={classes.title}>{title}</div>
            <div className={classes.img}><img src={img} alt='Value Icon' /></div>
        </motion.div>
    )
}

export default Index
