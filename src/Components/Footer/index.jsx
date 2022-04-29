import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.css';
import logo from './../../Assets/Images/logo.png'

function Index() {
    let navigate = useNavigate();

    return (
        <div className={classes.footer} onClick={() => {
            navigate('/');
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }}>
            <img src={logo} alt='Metamenko Logo' />
            <span className={classes.companyName}>METAMENKO</span>
        </div>
    )
}

export default Index
