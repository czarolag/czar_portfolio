import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { nav_icons, logos } from '../assets/img'


export const NavBar = () => {
    // State to track which navigation link is active
    const [activeLink, setActiveLink] = useState('home');

    // State to track if the page has been scrolled past a certain point
    const [scrolled, setScrolled] = useState(false);

    // Hook to detect scroll behavior and update the 'scrolled' state
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 

    // Function to update the active navigation link
    const handleSetActiveLink = (value) => setActiveLink(value);

    // Helper function to apply the correct class based on active link
    const getLinkClass = (link) =>
        activeLink === link ? 'active navbar-link' : 'navbar-link';

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="/">
                    <Link to="/">
                        <img src={logos.logo} alt="Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className={getLinkClass('home')} onClick={() => handleSetActiveLink('home')}>Home</Link>
                        <Link to="/skills" className={getLinkClass('skills')} onClick={() => handleSetActiveLink('skills')}>Skills</Link>
                        <Link to="/projects" className={getLinkClass('projects')} onClick={() => handleSetActiveLink('projects')}>Projects</Link>
                        <Link to="/contact" className={getLinkClass('contact')} onClick={() => handleSetActiveLink('contact')}>Contact</Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            
                            <a href="https://www.hackerrank.com/profile/czarolag" target="_blank" rel="noopener noreferrer" aria-label="Social Link 1">
                                <img src={nav_icons.navIcon1} alt="Social Icon 1" />
                            </a>
                            <a href="https://leetcode.com/u/colague3/" target="_blank" rel="noopener noreferrer" aria-label="Social Link 2">
                                <img src={nav_icons.navIcon2} alt="Social Icon 2" />
                            </a>
                            <a href="https://github.com/czarolag" target="_blank" rel="noopener noreferrer" aria-label="Social Link 3">
                                <img src={nav_icons.navIcon3} alt="Social Icon 3" />
                            </a>
                        </div>

                        <button className="vvd" onClick={() => window.open('https://www.linkedin.com/in/cesar-olague-225769214/', '_blank')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
