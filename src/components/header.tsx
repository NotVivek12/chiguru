import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import citLogo from '../assets/cit.svg';
import chiguruLogo from '../assets/chiguru.svg';
import JoinButton from './JoinButton';
import ScheduleButton from './ScheduleButton';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className={`header ${mobileMenuOpen ? 'menu-open' : ''}`}>
            <div><Link to="/" onClick={closeMobileMenu}><img src={citLogo} alt="Logo" className="cit-logo" /></Link></div>
            <div><Link to="/" onClick={closeMobileMenu}><img src={chiguruLogo} alt="Logo" className="chiguru-logo" /></Link></div>
            <button 
                className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div>
                <ul className={mobileMenuOpen ? 'mobile-menu-open' : ''}>
                    {mobileMenuOpen && (
                        <li className="mobile-menu-logos">
                            <img src={citLogo} alt="CIT Logo" className="mobile-logo" />
                            <img src={chiguruLogo} alt="Chiguru Logo" className="mobile-logo" />
                        </li>
                    )}
                    <li><a href="/about" onClick={closeMobileMenu}>ABOUT US</a></li>
                    <li><Link to="/contact" onClick={closeMobileMenu}>CONTACT</Link></li>
                    <li><Link to="/events" onClick={closeMobileMenu}>EVENTS</Link></li>
                    <li><Link to="/updates" onClick={closeMobileMenu}>UPDATES</Link></li>
                    <li className="join-btn-wrapper"><ScheduleButton /></li>
                    <li className="join-btn-wrapper"><JoinButton /></li> 
                </ul>
            </div>
        </div>
    )
}
export default Header;