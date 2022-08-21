import React from "react";
import { Container, Row, Col } from "reactstrap";
import Lottie from "lottie-react";
import Laptop from "../../../public/json/about-laptop.json";

import styles from "./About.module.css";

export default function Banner() {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row>
          <Col lg="6" md="6">
            {/* <Image src={bannerimg} alt="hero banner" className="mt-5" /> */}
            <Lottie
              animationData={Laptop}
              className={styles.banner_img}
              loop={true}
              autoPlay={true}
            />
          </Col>
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">We Like to Start Your Project With Us</h1>
            <h5 className="subtitle font-light mt-4">
              Service oriented and Professionally qualified to cater your
              business needs in technical services, and most especially in the
              Information and Communication Technology.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
