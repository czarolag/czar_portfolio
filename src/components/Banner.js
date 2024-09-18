import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { logos } from "../assets/img";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {

    // Time delay before typing changes between words
    const period = 2000;

    // Memoize the array to avoid it being re-created on every render
    const toRotate = useMemo(() => ["ML Enthusiast", "Software Engineer", "COMPSCI Student"], []);

    // Consolidated state for loop counter, deletion state, current text, and typing speed
    const [state, setState] = useState({
        loopNum: 0,                         // track which word in array is being displayed
        isDeleting: false,                  // tracks whether we are currently deleting
        text: '',                           // substring currently being shown
        delta: 300 - Math.random() * 100,   // speed of typing randomized slightly
    });

    // Destructure the state object for easier access
    const { loopNum, isDeleting, text, delta } = state;


    // handles typing effect: adding/removing characters from text
    const tick = useCallback(() => {
        const i = loopNum % toRotate.length;    
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        
        // Update the state with the new text and adjust typing speed (faster when deleting)
        setState((prevState) => ({
            ...prevState,
            text: updatedText,
            delta: isDeleting ? prevState.delta / 2 : prevState.delta,
        }));

        // If the full word is typed out, start deleting
        if (!isDeleting && updatedText === fullText) {
            setState((prevState) => ({
                ...prevState,
                isDeleting: true,
                delta: period,
            }));

        // If all characters are deleted, move to the next word
        } else if (isDeleting && updatedText === '') {
            setState((prevState) => ({
                ...prevState,
                isDeleting: false,
                loopNum: prevState.loopNum + 1,
                delta: 500,
            }));
        }
    }, [isDeleting, text, loopNum, toRotate]);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [tick, delta]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Cesar:`}<br />
                            <span className="txt-rotate" dataPeriod="1000" data-rotate='["ML Enthusiast", "Software Engineer", "COMPSCI Student"]'>
                                <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <p>
                            Hi, I'm Cesar Olague, a COMPSCI student at CSUDH with a passion for Software Development.
                            I specialize in Java, Python, and enjoy building AI models and exploring new projects.
                            I am excited about AI and machine learning and eager to contribute to innovative Software Engineering Projects.
                            Explore my projects and let's connect!
                        </p>
                        <button onClick={() => window.open('https://www.linkedin.com/in/cesar-olague-225769214/', '_blank')}>Let’s Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={logos.headerImg} alt="Header Img" style={{ width: '100%', height: 'auto' }} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};