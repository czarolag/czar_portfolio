import { Container, Row, Col } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Web_Cloud from "../assets/img/Certificates/WaCO.jpg"
import Cloud_Computing from "../assets/img/Certificates/Cloud_Computing.jpg"
import AI_GPT from "../assets/img/Certificates/ItGAIwGPT.jpg"
import General_AI from "../assets/img/Certificates/IGAI.jpg"
import COMPSCI_Principals from "../assets/img/Certificates/CPI.jpg"
import Blockchain_Basics from "../assets/img/Certificates/Blockchain_Basics.jpg"
import Cyber_Security from "../assets/img/Certificates/CyberSecurity.jpg"
import IoT_Fundamentals from "../assets/img/Certificates/IoT_Fundamentals.jpg"

import 'animate.css';



export const Skills = () => {
    // Responsive breakpoints for the carousel
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const certificates = [
        {
            "title": "Online Collaboration",
            "imgUrl": Web_Cloud,
            "skills": "Web and Cloud Operations"
          },
          {
            "title": "Cloud Computing",
            "imgUrl": Cloud_Computing,
            "skills": "Cloud Infrastructure and Management"
          },
          {
            "title": "AI with GPT",
            "imgUrl": AI_GPT,
            "skills": "Artificial Intelligence"
          },
          {
            "title": "Introduction to General AI",
            "imgUrl": General_AI,
            "skills": "AI Fundamentals"
          },
          {
            "title": "CPI",
            "imgUrl": COMPSCI_Principals,
            "skills": "Java, Python, Logic"
          },
          {
            "title": "Blockchain Basics",
            "imgUrl": Blockchain_Basics,
            "skills": "Blockchain Technology"
          },
          {
            "title": "Cyber Security",
            "imgUrl": Cyber_Security,
            "skills": "Network and Information Security"
          },
          {
            "title": "IoT Fundamentals",
            "imgUrl": IoT_Fundamentals,
            "skills": "Internet of Things"
          }
    ];

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
                                {certificates.map((certificate, index) => (
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
