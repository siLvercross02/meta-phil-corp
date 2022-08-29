import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, Input, Button } from "antd";
import Lottie from "lottie-react";
import styles from "../../../styles/Contact.module.css";
import ContactVector from "../../../public/json/contact-meta.json";
import {
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
  MdOutlineEmail,
} from "react-icons/md";

export default function FormContact() {
  const { TextArea } = Input;

  return (
    <div className={styles.contact_section}>
      <Container>
        <Row>
          <Col md={12} lg={12} xs={12}>
            <div>
              <h1 className={styles.contact_title}>Contact Us</h1>
            </div>
          </Col>
        </Row>

        <Row className={styles.contact_wrapper}>
          <Col md={4} lg={4} xs={12}>
            <div className={styles.contact_info}>
              <div className={styles.contact_icon}>
                <MdOutlineLocationOn />
              </div>
              <div>
                <h3 className={styles.contact_info_title}>Our Address</h3>
                <p className={styles.contact_info_text}>
                  UNIT 306 ATLSNTICA Star Condo 1221 Navara St. UST Dapitan Brgy
                  471 Zone 046 1008, Sampaloc NCR, City of Manila, First
                  District Philippines
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <div className={styles.contact_info}>
              <div className={styles.contact_icon}>
                <MdOutlinePhoneInTalk />
              </div>
              <div>
                <h3 className={styles.contact_info_title}>Contact</h3>
                <p className={styles.contact_info_text}>
                  Phone: +63 934 245 5643
                </p>
                <p className={styles.contact_info_text}>
                  Telephone: +207 235 7890
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <div className={styles.contact_info}>
              <div className={styles.contact_icon}>
                <MdOutlineEmail />
              </div>
              <div>
                <h3 className={styles.contact_info_title}>Email</h3>
                <p className={styles.contact_info_text}>
                  Office: info@metaphiltech.com
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5 text-center">
          <Col md={12} lg={12} xs={12}>
            <p className={styles.form_sub}>Get in Touch</p>
            <h2 className={styles.form_title}>Ready to Get Started?</h2>
            <p className={styles.form_text}>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} lg={6} xs={12}>
            <div className={styles.img_wrapper}>
              <Lottie
                animationData={ContactVector}
                loop={true}
                autoPlay={true}
              />
            </div>
          </Col>
          <Col md={6} lg={6} xs={12}>
            <Form>
              <Form.Item>
                <Input placeholder="Your name" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Your email address" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Your phone number" />
              </Form.Item>
              <Form.Item>
                <TextArea placeholder="Write message" rows={5} />
              </Form.Item>

              <Button type="primary" htmlType="submit" size="large" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
