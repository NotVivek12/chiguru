import './Updates.css';
import Header from '../components/header';
import logoSvg from '../assets/logo.svg';
import { OptimizedVideo } from '../components/OptimizedVideo';

function Updates() {
  return (
    <>
      <Header />
      <section className="updates-page">
        <div className="updates-container">
          <img src={logoSvg} alt="Navarupa Logo" className="updates-logo" />
          <h1>Updates</h1>
          
          <OptimizedVideo 
            src="/yeyeye.mp4" 
            className="video-container"
            poster="/poster.png"
          />
          
          <div className="video-description">
            <p>Stay tuned for the latest updates about Chiguru 2025!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Updates;
