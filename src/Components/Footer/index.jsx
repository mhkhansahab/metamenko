import React from 'react';
import classes from './style.module.css';
import logo from './../../Assets/Images/logo.png'

function Index() {
    return (
        <div className={classes.footer}>
            <img src={logo} alt='Metamenko Logo'/>
            <span className={classes.companyName}>METAMENKO</span>
        </div>
    )
}

export default Index
