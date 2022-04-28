import { Routes, Route, Link, useLocation } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/index';
import Hero from './Components/Hero/index';
import SectionOne from './Components/SectionOne/index';
import SectionTwo from './Components/SectionTwo/index';
import SectionThree from './Components/SectionThree/index';
import Footer from './Components/Footer/index';
import img1 from './Assets/Images/Avatars/1.png';
import img2 from './Assets/Images/Avatars/2.png';
import img3 from './Assets/Images/Avatars/3.png';
import img4 from './Assets/Images/Avatars/4.png';
import img5 from './Assets/Images/Avatars/5.png';
import img6 from './Assets/Images/Avatars/6.png';
import img7 from './Assets/Images/Avatars/7.png';
import img8 from './Assets/Images/Avatars/8.png';
import img9 from './Assets/Images/Avatars/9.png';
import img10 from './Assets/Images/Avatars/10.png';
import pie1 from './Assets/Images/EggPies/1.png';
import pie2 from './Assets/Images/EggPies/2.png';
import pie3 from './Assets/Images/EggPies/3.png';
import pie4 from './Assets/Images/EggPies/4.png';

function App() {
  let location = useLocation();

  const avatarDetails = [
    { name: 'DR.S', profession: 'PRODUCT', img: img1, description: '' },
    { name: 'CRYPTOSHAKE', profession: 'DESIGN', img: img2, description: '' },
    { name: 'SENSAI', profession: 'COMMUNITY', img: img3, description: '' },
    { name: 'FATIMA', profession: 'ARTIST', img: img4, description: '' },
    { name: 'AFSHIN', profession: 'ARTIST', img: img5, description: '' },
    { name: 'RAJ', profession: 'BACKEND', img: img6, description: '' },
    { name: 'ARROW', profession: 'GAME', img: img7, description: '' },
    { name: 'VICEROY', profession: 'ANIMATION', img: img8, description: '' },
    { name: 'MURAD', profession: 'WRITING', img: img9, description: '' },
    { name: 'BOAZ', profession: 'WRITING', img: img10, description: '' },
  ];

  const valuesInfo = [
    {
      index: '01', title: 'PRINCIPLES', img: pie1,
      content: [
        { text: 'Building for the future', bold: true },
        { text: 'We’re not trying to be the “next” anything, we’re just trying to be the best version of us. We want to raise the level for nfts and gaming across the ecosystem and set a new bar.', bold: false },
        { text: 'We want to create one of the largest collaborative communities focused on gaming. We’d like  formalize into a DAO to ensure the community continues the drive the future of this brand.', bold: false }]
    },
    {
      index: '02', title: 'BRIDGING', img: pie2,
      content: [
        { text: 'We’ll be releasing our digital mystery packs that grant you access to the Menkoverse and all the worlds within it. You’ll need these Menkos to access the next stage of the journey and participe in the Proof of Gaming protocol. We’ll also be releasing Menko-games that will be played within the community in order to unlock new experiences.', bold: false }
      ]
    },
    {
      index: '03', title: 'PROOF OF GAMING', img: pie3,
      content: [
        { text: 'Utility through gaming', bold: true },
        { text: 'Our emphasis is on gaming and we want to reward those who want to participate and hold. This is where you’ll be able to evolve your Menkos and upgrade their tiers as well.', bold: false }
      ]
    },
    {
      index: '04', title: 'THE MENKOVERSE & BEYOND', img: pie4,
      content: [
        { text: 'Portal to the worlds', bold: true },
        { text: 'The Menkoverse is the final piece of the puzzle. We’ll be releasing', bold: false },
        { text: 'We also want to expamd our IP beyond our game. We want to allow ownership in the charavters themselves and let the community dictate their stories.', bold: false },
      ]
    },
  ];

  return (
    <div>
      <Navbar color={location?.pathname === '/team' ? '#F8F8F8' : '#EEEEEE'} />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <div className='bodySection' style={{ backgroundColor: location?.pathname === '/minimap' ? '#EEEEEE' : '#F8F8F8' }}>
        <Routes>
          <Route path="/" element={<SectionOne />} />
          <Route path="team" element={<SectionTwo avatarDetails={avatarDetails} />} />
          <Route path="/minimap" element={<SectionThree valuesInfo={valuesInfo} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
