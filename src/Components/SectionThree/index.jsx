import React from 'react';
import classes from './style.module.css';
import InfoCard from './../InfoCard/index';

function Index({valuesInfo}) {
    return (
        <div className={classes.section}>
            <div>
                <div className={`${classes.heading}`}>
                    MINIMAP
                </div>
                <div className={`${classes.content}`}>
                    <div>We started MetaMenko with one goal in mind - to create one of the biggest gaming brands in the metaverse spanning various media types in collaboration with our community.</div>
                </div>
                <div className={classes.cardContainer}>
                   {
                       valuesInfo?.map((info)=>{
                           return <InfoCard index={info?.index} title={info?.title} img={info?.img}/>
                       })
                   }
                </div>
            </div>
        </div>
    )
}

export default Index
