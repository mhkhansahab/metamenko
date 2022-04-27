import React from 'react';
import metamenkoLogo from './../../Assets/Images/metamenko-logo.png';
import sushiLogo from './../../Assets/Images/sushi.png';
import classes from './style.module.css';


function Index() {
    return (
        <div className={classes.section}>
        <div className={classes.sectionBody}>
          <img src={metamenkoLogo} alt='Metamenko Logo' className={classes.metamenkoLogo}/>
          <img src={sushiLogo} alt='Sushi' className={classes.sushiLogo}/>
          <span>UNRAVEL THE MYSTERY</span>
        </div>
      </div>        
    )
}

export default Index
