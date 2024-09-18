import { Col } from "react-bootstrap";

export const FavoritesCard = ({ title, description, imgUrl, link }) => (
  <Col xs={12} sm={6} md={4}>
    <a href={link} className="fav-link" target="_blank" rel="noopener noreferrer">
      <div className="fav-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="fav-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  </Col>
);
