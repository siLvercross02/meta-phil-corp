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
              <p className="m-t-20">
                You can relay on our amazing features list and also our customer
                services will be great experience. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent tristique pellentesque
                ipsum.
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
              <p className="m-t-20">
                You can relay on our amazing features list and also our customer
                services will be great experience. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent tristique pellentesque
                ipsum.{" "}
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
