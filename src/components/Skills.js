import { Container, Row, Col } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import certificatesData from '../assets/img/Certificates/certificates.json'
import 'animate.css';



export const Skills = () => {
    // Responsive breakpoints for the carousel
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className="skills">
            {/* Technical and Soft Skills section */}
            <Container className="skills_container">
                <h2>Skills</h2>
                <Row>
                    <Col md={6}>
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>TensorFlow</li>
                            <li>HTML/CSS</li>
                            <li>Github</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h3>Soft Skills</h3>
                        <ul>
                            <li>Communication</li>
                            <li>Teamwork</li>
                            <li>Problem-solving</li>
                            <li>Time Management</li>
                            <li>Adaptability</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Certificates section */}
            <Container className="certificates_container">
                <Row>
                    <Col className="col-12">
                        <div className="certificate-bx wow zoomIn">
                            <h2>Certificates</h2>
                            <p>A showcase of my certificates and the skills gained.</p>
                            <Carousel responsive={responsive} infinite={true} className="certificate-slider">
                                {certificatesData.map((certificate, index) => (
                                    <div key={index} className="item">
                                        <CertificateCard {...certificate} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
