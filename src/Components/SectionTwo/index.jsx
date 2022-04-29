import React, { useState } from 'react';
import classes from './style.module.css';
import GameCard from './../GameCard/index';


function Index({ avatarDetails }) {
    const [cardStatus, setCardStatus] = useState({
        enable: true,
        index: 0
    });

    function handleClick(index) {
        setCardStatus({
            ...cardStatus,
            index: index
        })
    }

    return (
        <div className={classes.section}>
            <div>
                <div className={`${classes.heading}`}>
                    BUILT BY GAMERS
                </div>
                <div className={`${classes.content}`}>
                    <div>Our core team comes from backgrounds in crypto, big-tech, television, and gaming working to bridge the intersection of the digital and physical. Our artists come from under-represented communities entering the NFT space for the first time.</div>
                </div>
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
                <div className={classes.avatarContainer}>
                    {
                        avatarDetails?.map((detail, index) => {
                            return <GameCard key={index} name={detail?.name} profession={detail?.profession} img={detail?.img} index={index} handleClick={handleClick} />
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Index