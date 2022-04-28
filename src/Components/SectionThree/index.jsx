import React, { useState } from 'react';
import classes from './style.module.css';
import InfoCard from './../InfoCard/index';
import cancelIcon from './../../Assets/Images/cancel-icon.png';

function Index({ valuesInfo }) {
    const [cardStatus, setCardStatus] = useState({
        enable: false,
        index: 0
    });

    function handleClick(index) {
        setCardStatus({
            enable: true,
            index: index
        })
    }

    return (
        <div className={classes.section}>
            <div>
                <div className={`${classes.heading}`}>
                    MINIMAP
                </div>
                <div className={`${classes.content}`}>
                    <div>We started MetaMenko with one goal in mind - to create one of the biggest gaming brands in the metaverse spanning various media types in collaboration with our community.</div>
                </div>
                {
                    !cardStatus?.enable ?
                        <div className={classes.cardContainer}>
                            {
                                valuesInfo?.map((info, index) => {
                                    return <InfoCard key={index} index={info?.index} title={info?.title} img={info?.img} handleClick={handleClick} />
                                })
                            }
                        </div>
                        :
                        <div className={classes.detailContainer}>
                            <img src={cancelIcon} alt="Cancel Icon" className={classes.cancelIcon} onClick={() => setCardStatus({ ...cardStatus, enable: false })} />
                            <div className={classes.index}>{valuesInfo[cardStatus.index]?.index}</div>
                            <div className={classes.title}>{valuesInfo[cardStatus.index]?.title}</div>
                            <div>
                                {
                                    valuesInfo[cardStatus.index]?.content?.map((content, index) => {
                                        if (content?.bold) {
                                            return <div key={index} style={{ marginBottom: '0px' }}><b>{content?.text}</b></div>
                                        } else {
                                            return <div key={index} >{content?.text}</div>
                                        }
                                    })
                                }
                                <div className={classes.cardImage}><img src={valuesInfo[cardStatus.index]?.img} /></div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default Index
