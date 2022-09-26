/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const PortfolioComponent = () => {
  return (
    <div>
      {/* <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Portfolio</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Our Portfolio</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src="images/portfolio/structure-cabling.jpg"
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Structure Cabling</h5>
                  <p className="m-b-0 font-14">
                    Structure cabling design & installation
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src="images/portfolio/solar-power.jpg"
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Solar Power System</h5>
                  <p className="m-b-0 font-14"> Solar Power System Services</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src="images/portfolio/camera.jpg"
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Surveillance System</h5>
                  <p className="m-b-0 font-14">
                    Surveillance System Installation
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src="images/portfolio/access.jpg"
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Access Control System</h5>
                  <p className="m-b-0 font-14">
                    Access Control System Installation
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src="images/portfolio/software.jpg"
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Software Development</h5>
                  <p className="m-b-0 font-14">
                    Custom Software Development Services
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img
                    className="card-img-top"
                    src="images/portfolio/professional.jpg"
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Professional Services</h5>
                  <p className="m-b-0 font-14">
                    Professional Services and Consultancy
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
