import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import navIcon from './../../Assets/Images/nav-icon.png';
import cancelIcon from './../../Assets/Images/cancel-icon.png';
import discordIcon from './../../Assets/Images/discord.png';
import twitterIcon from './../../Assets/Images/twitter.png';
import logo from './../../Assets/Images/logo.png';
import classes from './style.module.css';

function Index({ color }) {
    const [navStatus, setNavStatus] = useState(false);
    let navigate = useNavigate();

    return (
        <div className={classes.navbar} style={{ background: color }}>

            <div className={classes.metamenkoLogo} onClick={() => { setNavStatus(false); navigate('/') }}>
                <img src={logo} alt="Metamenko Logo" />
            </div>

            <div className={classes.links}>
                <ul>
                    <li onClick={() => { setNavStatus(false); navigate('/') }}>HOME</li>
                    <li onClick={() => { setNavStatus(false); navigate('/team') }}>TEAM</li>
                    <li onClick={() => { setNavStatus(false); navigate('/minimap') }}>MINIMAP</li>
                    <li><img src={discordIcon} alt='Discord'/></li>
                    <li><img src={twitterIcon} alt='Twitter'/></li>
                </ul>
            </div>

            <div className={classes.navIcon} onClick={() => setNavStatus(true)}>
                <img src={navIcon} alt="Nav Icon" />
            </div>

            {
                navStatus ?
                    <div className={classes.mobileNav}>
                        <div className={classes.mobileHeader}>
                            <div className={classes.metamenkoLogo} onClick={() => { setNavStatus(false); navigate('/') }}>
                                <img src={logo} alt="Metamenko Logo" />
                            </div>
                            <div className={classes.navIcon} onClick={() => setNavStatus(false)}>
                                <img src={cancelIcon} alt="Cancel Icon" />
                            </div>
                        </div>
                        <div className={classes.mobileLinks}>
                            <div onClick={() => { setNavStatus(false); navigate('/') }}>HOME</div>
                            <div onClick={() => { setNavStatus(false); navigate('/team') }}>TEAM</div>
                            <div onClick={() => { setNavStatus(false); navigate('/minimap') }}>MINIMAP</div>
                            <div className={classes.specialLink}>
                                <div>DISCORD</div>
                                <img src={discordIcon} alt='Discord Icon' />
                            </div>
                            <div className={classes.specialLink}>
                                <div>TWITTER</div>
                                <img src={twitterIcon} alt='Twitter Icon' />
                            </div>
                        </div>
                        <div className={classes.siteLink}>
                            METAMENKO.COM
                        </div>
                    </div> : null
            }

        </div>
    )
}

export default Index
