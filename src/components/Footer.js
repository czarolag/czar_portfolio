import { Container, Row, Col } from 'react-bootstrap';
import { nav_icons, logos } from '../assets/img';

export const Footer = () => (
    <footer className="footer">
        <div className="footer-spacer" />
        <Container>
            <Row className="align-items-center">
                <Col xs={12} sm={6} className="text-center text-sm-start">
                    <img src={logos.logo} alt="Logo" className="footer-logo" />
                </Col>
                <Col xs={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="/"><img src={nav_icons.navIcon1} alt="Icon" /></a>
                        <a href="/"><img src={nav_icons.navIcon2} alt="Icon" /></a>
                        <a href="/"><img src={nav_icons.navIcon3} alt="Icon" /></a>
                    </div>

                    <p className="footer-copy">Copyright 2024. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
);
