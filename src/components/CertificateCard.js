import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, imgUrl, skills }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="cert-imgbx" onClick={() => window.open(imgUrl, '_blank')}>
        <a href={imgUrl} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} />
        </a>
        <div className="cert-txtx">
          <h4>{title}</h4>
          <span>{skills}</span>
        </div>
      </div>
    </Col>
  );
};
