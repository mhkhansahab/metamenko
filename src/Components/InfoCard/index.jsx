import React from 'react';
import classes from './style.module.css';

function Index({ index, title, img, handleClick }) {
    return (
        <div className={classes.card} onClick={() => handleClick(Number(index) - 1)}>
            <div className={classes.index}>{index}</div>
            <div className={classes.title}>{title}</div>
            <div className={classes.img}><img src={img} alt='Value Image' /></div>
        </div>
    )
}

export default Index
