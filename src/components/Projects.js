import { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import { project_imgs } from '../assets/img';



const projectData = [
  {
    "title": "Animal Recognition Model (CNN)",
    "description": "Developed a Convolutional Neural Network (CNN) to classify and identify specific animal types from a given set.",
    "imgUrl": project_imgs.animal_recognition_demo,
    "projectLink": "https://colab.research.google.com/drive/1EvkZLDbSiKWSc8jYNYCql5vhM3gzMsTs",
    "techStack": "TensorFlow, AI, Python"
  },
  {
    "title": "Discord Bot (Google Sheets)",
    "description": "Developed a Discord bot that integrated with Google Sheets, enabling users to edit Google Sheets directly from Discord.",
    "imgUrl": project_imgs.discord_bot_demo,
    "projectLink": "https://github.com/czarolag/DiscordBot",
    "techStack": "API, Python, Discord"
  },
  {
    "title": "Vacapedia (Wiki-Project)",
    "description": "Collaborated with a team to create a Wikipedia-style page for vacation spots. Managed user authentication, including login, logout, and secure password encryption.",
    "imgUrl": project_imgs.wiki_demo,
    "projectLink": "https://github.com/czarolag/wiki-project",
    "techStack": "Flask, CSS, HTML, Python, Jinja, FullStack, Collaboration"
  },
  {
    "title": "Finite Automata Conversion and Simplification",
    "description": "Developed multiple programs focused on Finite Automata, including implementing regular operations without utilizing the set library, converting NFA to DFA, and simplifying context-free grammar.",
    "imgUrl": project_imgs.regular_operations_demo,
    "projectLink": "https://github.com/czarolag/Automata-Conversion-and-Simplification",
    "techStack": "Java, UI, File, Object Oriented, Finite Automata, Algorithm"
  },
  {
    "title": "Bank Program",
    "description": "Collaborated with a team to develop a banking application with a user-friendly interface, enabling basic transactions using object-oriented programming principles.",
    "imgUrl": project_imgs.bank_program_demo,
    "projectLink": "https://github.com/czarolag/Simple-Bank-Program",
    "techStack": "Java, UI, File, Object Oriented, Collaboration"
  }
];



export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setProjects(projectData);
    setFilteredProjects(projectData);
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
                  eventKey="Java" 
                  onClick={() => filterProjects("Java")} 
                  className={activeFilter === "Java" ? "active" : ""}
                >
                  Java
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  eventKey="Collaboration" 
                  onClick={() => filterProjects("Collaboration")} 
                  className={activeFilter === "Collaboration" ? "active" : ""}
                >
                  Collaboration
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
