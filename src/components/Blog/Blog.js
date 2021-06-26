import React from "react";
import { Container, Row } from "react-bootstrap";

import Particle from "../Particle";

function Blog() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        
      <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          {/* <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
           */}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
