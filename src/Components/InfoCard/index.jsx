import React from 'react';
import classes from './style.module.css';

function Index({index, title, img}) {
    return (
        <div className={classes.card}>
            <div className={classes.index}>{index}</div>
            <div className={classes.title}>{title}</div>
            <div className={classes.img}><img src={img} alt='Value Image'/></div>
        </div>
    )
}

export default Index
