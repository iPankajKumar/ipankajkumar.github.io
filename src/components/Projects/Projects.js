import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";


import covidtracker from "../../Assets/Projects/covidtracker.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidtracker}
              isBlog={false}
              title="Covid Tracker India"
              description="
              An initiative to make life easier by automating covid vaccination slots look up in India by choosing PIN's' (as per your convenience) and date's', the system will then start searching for available slots in the chosen PIN-date range and ping you the hospital names so that you can book the slots by logging in co-WIN platform."
              link="https://github.com/ipankajsingh/covidtracker"
            />
          </Col>

         
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
