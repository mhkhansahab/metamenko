import React from 'react';
import classes from './style.module.css';

function Index({ name, profession, img, index, handleClick }) {
    return (
        <div className={classes.card} onClick={() => handleClick(index)}>
            <div className={classes.name}>{name}</div>
            <div className={classes.profession}>{profession}</div>
            <div className={classes.img}><img src={img} alt='dragon' /></div>
        </div>
    )
}

export default Index
