import React from 'react';
import classes from './style.module.css';
import GameCard from './../GameCard/index';


function Index({ avatarDetails }) {
    return (
        <div className={classes.section}>
            <div>
                <div className={`${classes.heading}`}>
                    BUILT BY GAMERS
                </div>
                <div className={`${classes.content}`}>
                    <div>Our core team comes from backgrounds in crypto, big-tech, television, and gaming. We’re gamers at heart and are working to build the next frontier of NFTs and gaming.</div>
                </div>
                <div className={classes.avatarContainer}>
                    {
                        avatarDetails?.map((detail,index)=>{
                            return <GameCard name={detail?.name} profession={detail?.profession} img={detail?.img}/> 
                        })
                         
                    }
                </div>
            </div>
        </div>
    )
}

export default Index