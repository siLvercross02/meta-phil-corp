import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

export default function SectionAbout() {
  return (
    <Container>
      <Row className="m-t-40">
        <Col md="6" className="wrap-feature4-box">
          <Card>
            <CardBody>
              <div className="icon-round bg-light-info">
                <i className="fa fa-check-circle"></i>
              </div>
              <h2 className="font-medium">Mission</h2>
              <p className="m-t-20 font-16 mb-0">
                An enduring commitment to provide competent professional expert
                and services for the client needs with treasures heritage and is
                imbued with core values of personal integrity and spirituality,
                family solidarity and community.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="wrap-feature4-box">
          <Card>
            <CardBody>
              <div className="icon-round bg-light-info">
                <i className="fa fa-eye"></i>
              </div>
              <h2 className="font-medium">Vision </h2>
              <p className="m-t-20 font-16 mb-0">
                A corporation that provides competitive and professionalism
                through services and support.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="wrap-feature4-box">
          <Card>
            <CardBody>
              <div className="icon-round bg-light-info">
                <i class="fa fa-certificate"></i>
              </div>
              <h2 className="font-medium">Four-Fold Objective </h2>
              <ol className="m-t-20 font-16 mb-0">
                <li>Professionalism and Character</li>
                <li>Competency and Extra Mile of Service</li>
                <li>Continues Learning and Leadership</li>
                <li>Adherence to the law of the land</li>
              </ol>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
