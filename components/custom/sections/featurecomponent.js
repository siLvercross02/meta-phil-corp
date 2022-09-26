/* eslint-disable */
import React from "react";
import Link from "next/link";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Instant Solutions</h5>
                  <p className="m-t-20">
                    With our experience in the development of you platforms, we
                    can offer instant solutions for your business and design
                    needs.
                  </p>
                  <Link href="/services" passHref>
                    <a className="linking text-themecolor">
                      Explore More<i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Powerful Techniques </h5>
                  <p className="m-t-20">
                    By utilizing the latest technologies and tools, we will be
                    able to build a platform that meets your business needs.
                  </p>
                  <Link href="/services" passHref>
                    <a className="linking text-themecolor">
                      Explore More<i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <img
                src="/images/corp-building.jpg"
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Experience
                    </span>
                    <h3 className="title">
                      We Have 40+ Years Industrial Experiences
                    </h3>
                    <p>
                      Our company has over 40 years of combined experience in
                      information technology, which allows us to provide our
                      clients with the best services possible.
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
