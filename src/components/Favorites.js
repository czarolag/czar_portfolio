import { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FavoritesCard } from "./FavoritesCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

// load the favorites.json file
import favoritesData from "../assets/img/favorites.json";

export const Favorites = () => {
  const [shows, setShows] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simulate data loading from an external source
    const loadData = async () => {
      // Set shows and games from the JSON data
      setShows(favoritesData.shows);
      setGames(favoritesData.games);
    };

    loadData();
  }, []);

  return (
    <section className="favorites" id="favorites">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Favorite Films & Games</h2>
            <p>
              Here is a list of some of my all-time favorite films and shows as well as games.
              These games and films provided stories that have captivated my imagination.
            </p>
            <Tab.Container id="favorites-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Films/Shows</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Games</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {shows.map((show, index) => (
                      <FavoritesCard key={index} {...show} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {games.map((game, index) => (
                      <FavoritesCard key={index} {...game} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
