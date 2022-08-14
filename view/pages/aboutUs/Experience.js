import React from "react";
import { Row, Col, Container } from "reactstrap";

export default function Experience() {
  return (
    <div className="mini-spacer bg-info text-white c2a7 mt-5">
      <Container className="mb-4">
        <h2 className="title text-white text-center mb-5">Our Experience</h2>
        <Row>
          <Col md={4} lg={4} xs={12}>
            <div className="d-flex align-items-center mb-2">
              <h4 className="text-white">Perfect Services</h4>
            </div>
            <p>Service that meet the needs of your customers.</p>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <div className="d-flex align-items-center mb-2">
              <h4 className="text-white">Talented Team</h4>
            </div>
            <p>
              Your projects and services will be handled by a talented team.
            </p>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <div className="d-flex align-items-center mb-2">
              <h4 className="text-white">Ultimate Flexibility</h4>
            </div>
            <p>
              You'll find our team to be very responsive and flexible, which
              will result in a great output.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
