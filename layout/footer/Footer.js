/* eslint-disable */
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import PrivacyPolicy from "../../components/modals/PrivacyPolicy";

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="footer4 b-t spacer">
      <PrivacyPolicy toggle={toggleModal} visible={modal} />
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>
              UNIT 306 ATLSNTICA Star Condo 1221 Navara St. UST Dapitan Brgy 471
              Zone 046 1008, Sampaloc NCR, City of Manila, First District
              Philippines
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>
              Phone : +63 917 500 7562 <br />
              Telephone : +207 235 7890
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              Office :
              <Link href="#">
                <a className="link ml-1">inquiry@metaphil-tech.com</a>
              </Link>
              <br />
              Site :
              <Link href="/">
                <a className="link ml-1">https://metaphil-tech.com</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="https://www.facebook.com/people/Meta-Phil-Tech-Corporation/100083374749162/">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              {/* <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-google-plus"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link> */}
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="/">
                    <a className="link">Meta Phil-Tech Corporation</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  {/* <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link> */}
                  <a className="p-10" onClick={toggleModal}>
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
