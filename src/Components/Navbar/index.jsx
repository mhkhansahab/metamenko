import React, { useRef } from 'react';
import navIcon from './../../Assets/Images/nav-icon.png';
import discordIcon from './../../Assets/Images/discord.png';
import twitterIcon from './../../Assets/Images/twitter.png';
import logo from './../../Assets/Images/logo.png';
import classes from './style.module.css';

function Index() {
    const ref = useRef();
    function navToggler() {
        if (ref.current.style.transform === 'translateX(-500px)' || ref.current.style.transform === '') {
            ref.current.style.transform = 'translateX(0px)';
        } else {
            ref.current.style.transform = 'translateX(-500px)';
        }
    }

    return (
        <div className={classes.navbar}>

            <div className={classes.metamenkoLogo}>
                <img src={logo} alt="Metamenko Logo" />
            </div>

            <div className={classes.links} ref={ref}>
                <ul>
                    <li>MENKOS</li>
                    <li>GATEWAYS</li>
                    <li>FOCUS</li>
                    <li>TEAM</li>
                    <li><img src={discordIcon}/></li>
                    <li><img src={twitterIcon}/></li>
                </ul>
            </div>

            <div className={classes.navIcon}>
                <img src={navIcon} alt="Nav Icon" />
            </div>

        </div>
    )
}

export default Index
