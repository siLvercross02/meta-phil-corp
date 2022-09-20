import React from "react";
import { Container, Row, Col } from "reactstrap";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Secure IT Solutions for a more secure environment
            </h1>
            <h4 className="subtitle font-light">
              You share your idea
              <br /> We get it done.
            </h4>
            <a href="#" className="btn btn-danger m-r-20 btn-md m-t-30 ">
              Get Started
            </a>
          </Col>
          <Col lg="6" md="6">
            <div className="text-center mx-auto">
              <img
                src="/images/banner-img.png"
                alt="hero banner"
                className="mt-5 img-fluid"
                style={{ width: "90%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
