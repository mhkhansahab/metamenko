import React, { useState, useEffect } from 'react';
import classes from './style.module.css';
import GameCard from './../GameCard/index';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


function Index({ avatarDetails }) {
    const animation = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    const [cardStatus, setCardStatus] = useState({
        enable: false,
        index: 0
    });

    useEffect(() => {
        if (inView) {
            animation.start("onscreen");
        } else {
            animation.start("offscreen");
        }
    }, [animation, inView]);

    function handleClick(index) {
        if(cardStatus?.enable){

            setCardStatus({
                ...cardStatus,
                index: index
            })
        }else{
            setCardStatus({
                enable: true,
                index: index
            })
        }
    }

    const textVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                delay: .3,
                delayChildren: 0.5,
                staggerDirection: -1
            }
        }
    };


    return (
        <div className={classes.section}>
            <motion.div
                className={`${classes.content}`}>
                <div className={`${classes.heading}`}>
                    BUILT BY GAMERS
                </div>
                <motion.div
                   ref={ref}
                   animate={animation}
                   initial="offscreen"
                   whileInView="onscreen"
                   viewport={{ once: true, amount: 0.8 }}
                   transition={{ duration: 0.7 }}
                    variants={textVariants}>
                    <div>Our core team comes from backgrounds in crypto, big-tech, television, and gaming. We’re gamers at heart and are working to build the next frontier of NFTs and gaming.</div>
                </motion.div>
                {
                    cardStatus?.enable ?
                        <div className={classes.playerCard}>
                            <div className={classes.playerImage}><img src={avatarDetails[cardStatus?.index]?.img} alt='Player' /></div>
                            <div className={classes.playerDetails}>
                                <div>{avatarDetails[cardStatus?.index]?.name}</div>
                                <div>{avatarDetails[cardStatus?.index]?.profession}</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                        : null
                }
                <motion.div 
                   ref={ref}
                   animate={animation}
                   initial="offscreen"
                   whileInView="onscreen"
                   viewport={{ once: true, amount: 0.8 }}
                   className={classes.avatarContainer}>
                    {
                        avatarDetails?.map((detail, index) => {
                            return <GameCard key={index} name={detail?.name} profession={detail?.profession} img={detail?.img} index={index} handleClick={handleClick} />
                        })

                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Index