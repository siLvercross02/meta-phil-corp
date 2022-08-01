import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/form-banners/banner1/banner-img.png";

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
              Lorem ipsum dolor sit amet,
              <br /> sed do eiusmod tempor aliqua.
            </h4>
            <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Get Started
            </a>
            {/* <Link href="/#coming">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Upgrade To Pro
              </a>
            </Link> */}
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" className="mt-5" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
