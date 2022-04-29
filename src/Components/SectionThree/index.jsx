import React, { useState, useEffect, useRef } from 'react';
import classes from './style.module.css';
import InfoCard from './../InfoCard/index';
import cancelIcon from './../../Assets/Images/cancel-icon.png';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Index({ valuesInfo }) {
    const reference = useRef();
    const animation = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });
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
    }, [animation, inView, cardStatus.enable]);

    function handleClick(index, type) {
        if(type === 'open'){
            setCardStatus({
                enable: true,
                index: index
            })
            reference.current.style.display = 'none'
        }else{
            setCardStatus({ ...cardStatus, enable: false })
            reference.current.style.display = 'flex'
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
                ref={ref}
                animate={animation}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.7 }}>
                <div className={`${classes.heading}`}>
                    MINIMAP
                </div>
                <motion.div variants={textVariants} className={`${classes.content}`}>
                    <div>We started MetaMenko with one goal in mind - to create one of the biggest gaming brands in the metaverse spanning various media types in collaboration with our community.</div>
                </motion.div>
                <motion.div
                    ref={reference}
                    className={classes.cardContainer}>
                    {
                        valuesInfo?.map((info, index) => {
                            return <InfoCard key={index} index={info?.index} title={info?.title} img={info?.img} handleClick={handleClick} />
                        })
                    }
                </motion.div>
                {
                    cardStatus?.enable ?
                        <motion.div
                            className={classes.detailContainer}>
                            <img src={cancelIcon} alt="Cancel Icon" className={classes.cancelIcon} onClick={() => handleClick(0,'close')} />
                            <div className={classes.index}>{valuesInfo[cardStatus.index]?.index}</div>
                            <div className={classes.title}>{valuesInfo[cardStatus.index]?.title}</div>
                            <div className={classes.desktopTitle}>{valuesInfo[cardStatus.index]?.index + ' ' + valuesInfo[cardStatus.index]?.title}</div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: .3 }}
                                className={classes.imageDetail}>
                                <div>
                                    {
                                        valuesInfo[cardStatus.index]?.content?.map((content, index) => {
                                            if (content?.bold) {
                                                return <div className={classes.textContent} key={index} style={{ marginBottom: '0px' }}><b>{content?.text}</b></div>
                                            } else {
                                                return <div className={classes.textContent} key={index} >{content?.text}</div>
                                            }
                                        })
                                    }
                                </div>
                                <div className={classes.cardImage}><img src={valuesInfo[cardStatus.index]?.img} alt='Value Icon' /></div>
                            </motion.div>
                        </motion.div> : null
                }

            </motion.div>
        </div>
    )
}

export default Index
