import { useEffect } from 'react';
import './Home.css';
import Header from '../components/header';

function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const element = document.querySelector(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Duplicate marquee content for seamless loop
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
      marqueeContent.innerHTML += marqueeContent.innerHTML;
    }

    // Add parallax effect to hero
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-content') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = String(1 - (scrolled / 600));
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.about, .years, .celebrity').forEach(section => {
      const el = section as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'all 0.8s ease-out';
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="stars">
          <img src="/background.png" alt="" />
        </div>
        <div className="butterfly butterfly1">
          <img src="/bbf1.png" alt="" />
        </div>
        <div className="butterfly butterfly2">
          <img src="/bbf2.png" alt="" />
        </div>
        
        <div className="hero-content">
          <img src="/src/assets/logo.svg" alt="Navarupa - New Form of Life" className="navarupa-logo" />
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          <span>CHIGURU 2025</span>
          <span>CHIGURU 2025</span>
          <span>CHIGURU 2025</span>
          <span>CHIGURU 2025</span>
          <span>CHIGURU 2025</span>
          <span>CHIGURU 2025</span>
        </div>
      </div>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-text">
          <h2>CHIGURU 2025</h2>
          <p>Chiguru is Cambridge Institute of Technology's vibrant cultural fest, celebrating creativity and unity.</p>
          <br />
          <p>Chiguru 2025 is a celebration of creativity, culture, and collaboration — 
            a vibrant platform where ideas bloom and expressions take form. Every year, Chiguru brings together 
            the spirit of innovation and artistry, showcasing the incredible talents of students through performances, 
            installations, and experiences that inspire.</p>
          <br />
          <p>This year's theme, "Navarupa – Nine Forms of Expressions," embraces the diversity of emotions and creativity, 
            transforming imagination into an artistic spectacle. From visual art and design to music, dance, and theatre, 
            Chiguru 2025 is more than just an event — it's a journey of self-expression, unity, and new beginnings.</p>
        </div>
        <div className="about-image">
          <div className="placeholder-img">
            <img src="/blue.png" alt="Chiguru celebration" />
          </div>
        </div>
      </section>

      {/* Years Section */}
      <section className="years">
        <h2>CELEBRATING <span className="highlight">18</span> YEARS' OF <span className="highlight">CHIGURU</span></h2>
      </section>

      {/* Second About */}
      <section className="about">
        <div className="about-image">
          <div className="placeholder-img">
            <img src="/blue2.png" alt="Chiguru celebration" />
          </div>
        </div>
        <div className="about-text">
          <h2 style={{color: '#00ccff'}}>CHIGURU 2025</h2>
          <p>Chiguru is Cambridge Institute of Technology's vibrant cultural fest, celebrating creativity and unity.</p>
          <br />
          <p>Chiguru is Cambridge Institute of Technology's vibrant cultural fest, celebrating creativity and unity. This year's theme, Navarupa (New Form of Life), showcases India's rich cultural tapestry with music, dance and art known for exciting performances and top-tier collaborations, chiguru offers students a dynamic platform for talent and creativity.</p>
          <br />
          <p>Dance and art known for exciting performances and top-tier collaborations, Chiguru offers students a dynamic platform for talent and creativity.</p>
        </div>
      </section>

      {/* Celebrity Section */}
      <section className="celebrity">
        <h2>PREVIOUS YEAR CELEBRITY</h2>
        <div className="celebrity-grid">
          <div className="celebrity-card"><img src="/celebs/Celebrity 1.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 2.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 3.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 4.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 5.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 6.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 7.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 8.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 9.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 10.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 11.png" alt="Celebrity" /></div>
          <div className="celebrity-card"><img src="/celebs/Celebrity 12.png" alt="Celebrity" /></div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Cambridge Institute of Technology. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
