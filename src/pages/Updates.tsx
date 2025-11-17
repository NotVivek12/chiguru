import './Updates.css';
import Header from '../components/header';
import logoSvg from '../assets/logo.svg';

function Updates() {
  return (
    <>
      <Header />
      <section className="updates-page">
        <div className="updates-container">
          <img src={logoSvg} alt="Navarupa Logo" className="updates-logo" />
          <h1>Updates</h1>
          
          <div className="video-container">
            <video autoPlay muted controls className="updates-video">
              <source src="/yeyeye.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="video-description">
            <p>Stay tuned for the latest updates about Chiguru 2025!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Updates;
