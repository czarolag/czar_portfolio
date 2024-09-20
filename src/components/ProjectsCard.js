import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl, projectLink, techStack }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="project-card">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} className="project-img" />
        </a>
        <div className="project-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="tech-stack">
            <span>{techStack}</span>
          </div>
          <div className="project-links">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </div>
    </Col>
  );
};
