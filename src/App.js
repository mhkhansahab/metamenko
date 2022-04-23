import './App.css';
import Navbar from './Components/Navbar/index';
import metamenkoLogo from './Assets/Images/metamenko-logo.png';
import sushiLogo from './Assets/Images/sushi.png';

function App() {
  return (
    <div className="App">
      <div className='section-1'>
        <Navbar/>
        <div className='section-1-body'>
          <img src={metamenkoLogo} alt='Metamenko Logo' className='metamenko-logo'/>
          <img src={sushiLogo} alt='Sushi' className='sushi-logo'/>
          <span>UNRAVEL THE MYSTERY</span>
        </div>
      </div>
    </div>
  );
}

export default App;
