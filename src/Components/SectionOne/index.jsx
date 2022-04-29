import React from 'react';
import classes from './style.module.css';
import smallSwords from './../../Assets/Images/small-swords.png';
import bigSwords from './../../Assets/Images/big-swords.png';

function Index() {
    return (
        <div className={classes.section}>
            <div>
                <div className={`${classes.heading}`}>
                    THE PORTALS HAVE OPENED
                </div>
                <div className={`${classes.content}`}>
                    <div>Metamenko connects the digital and the physical. </div>
                    <div>Building more than just a brand. The gateway to your digital identity that can also manifest in the physical world.</div>
                    <div>Starting with a collection of 7,000 digital mystery packs, which will grant you access to the worlds of the Menkoverse. Burn them to reveal your avatars or hold onto to the pack to continue the mystery. It’ll start with merchandise, live game events, NFT collabs and  drops, a competitive strategy game linked to your Menkos and much more will be revealed over time. </div>
                    <div>The Menkoverse consists of reimagined worlds that crossover in the digital and physical realm. The intersection of the two is still yet to take shape.</div>
                    <div>See you in the Menkoverse. </div>
                    <div style={{ marginTop: '0px' }}><b>Some of us are already there.</b></div>
                </div>
                <div className={classes.smallSwords}><img src={smallSwords} alt='Small Swords' /></div>
                <div className={classes.bigSwords}><img src={bigSwords} alt='Big Swords' /></div>

            </div>
            <div style={{ marginTop: '50px' }}>
                <div className={`${classes.heading}`}>UNLOCKING GAMING UTILITY</div>
                <div className={`${classes.content}`}>
                    <div>Menkos will be needed to participate in our games in the Menkoverse. You’ll accrue rewards and be able to evolve your Menkos, achieving new tiers and updating their base abilities.</div>
                    <div>Evolved Menkos will allow you access to hidden portals.</div>
                    <div><b>What next?</b> Our Proof of Gaming protocol will be our first launch shortly after mint so you can start engaging from the get go.</div>
                </div>
            </div>
        </div>
    )
}

export default Index
