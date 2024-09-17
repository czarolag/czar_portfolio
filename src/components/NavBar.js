import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

// assets used for NavBar
import logo from '../assets/img/CZAR-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="/"
                            className={getLinkClass('home')}
                            onClick={() => handleSetActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="/skills"
                            className={getLinkClass('skills')}
                            onClick={() => handleSetActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="/links"
                            className={getLinkClass('links')}
                            onClick={() => handleSetActiveLink('links')}
                        >
                            Links
                        </Nav.Link>
                        <Nav.Link
                            href="/about-me"
                            className={getLinkClass('about-me')}
                            onClick={() => handleSetActiveLink('about-me')}
                        >
                            About Me
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            
                            <a href="#" aria-label="Social Link 1">
                                <img src={navIcon1} alt="Social Icon 1" />
                            </a>
                            <a href="#" aria-label="Social Link 2">
                                <img src={navIcon2} alt="Social Icon 2" />
                            </a>
                            <a href="#" aria-label="Social Link 3">
                                <img src={navIcon3} alt="Social Icon 3" />
                            </a>
                        </div>

                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};