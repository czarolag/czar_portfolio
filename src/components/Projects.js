import { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import projectData from "../assets/img/projects.json";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    // Load projects from the JSON file
    setProjects(projectData.projects);
    setFilteredProjects(projectData.projects);
  }, []);

  const filterProjects = (category) => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.techStack.includes(category));
      setFilteredProjects(filtered);
    }
    setActiveFilter(category);
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>My Projects</h2>
            <p>
              Explore the various projects I've worked on. Use the filter to view projects by category.
            </p>
            
            {/* Project Filter Navigation */}
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link 
                  eventKey="all" 
                  onClick={() => filterProjects("All")} 
                  className={activeFilter === "All" ? "active" : ""}
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  eventKey="Python" 
                  onClick={() => filterProjects("Python")} 
                  className={activeFilter === "Python" ? "active" : ""}
                >
                  Python
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  eventKey="Option 2" 
                  onClick={() => filterProjects("Option 2")} 
                  className={activeFilter === "Option 2" ? "active" : ""}
                >
                  Option2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  eventKey="API" 
                  onClick={() => filterProjects("API")} 
                  className={activeFilter === "API" ? "active" : ""}
                >
                  API
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Row>
              {filteredProjects.map((project, index) => (
                <ProjectsCard 
                  key={index} 
                  {...project}  
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
