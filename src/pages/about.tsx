import Header from '../components/header'
import '../App.css'
import poster from '/poster.png';

function About() {
  return (
    <div className="app">
      <Header />
      <div className="about-container">
        <div className="about-image">
          <img src={poster} alt="Chiguru 2025 Poster" />
        </div>
        <div className="about-section">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Chiguru is the Annual Engineering Intercollegiate Cultural Fest of Cambridge Institute of Technology (CIT), Bengaluru. Now in its 18th grand edition, Chiguru has evolved into one of the most-awaited and celebrated cultural extravaganzas for engineering students across Karnataka.<br /><br />
            Over the years, Chiguru has become a vibrant platform for students to showcase their talents, creativity, and passion across diverse art forms. The previous edition witnessed over 15,000 visitors, participation from more than 50 engineering colleges, and over 56 spectacular cultural events and activities—making it one of the largest student-driven fests in the region.<br /><br />
            The theme for Chiguru 2025, “Navarupa – A New Form of Life,” represents renewal, transformation, and the spirit of creation. Just as life takes new shapes and forms, Navarupa celebrates the power of innovation and reinvention in every performer, artist, and participant. It symbolizes the evolution of youth culture—dynamic, bold, and ever-changing.<br /><br />
            Join us at Chiguru 2025 as we embrace Navarupa—a new form of life—where every beat, every movement, and every idea brings forth a new beginning.
        </p>
        </div>
      </div>
    </div>
  );
}
export default About;