import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { Form, Input, Button, notification } from "antd";
import Lottie from "lottie-react";
import styles from "../../../styles/Contact.module.css";
import ContactVector from "../../../public/json/contact-meta.json";
import {
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
  MdOutlineEmail,
} from "react-icons/md";

export default function FormContact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { TextArea } = Input;

  const onFinished = async (value) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `${process.env.API_URL}/api/contacts`,
        method: "post",
        data: {
          data: {
            email: `${value.email}`,
            fullName: `${value.fullName}`,
            mobileNumber: `${value.mobileNumber}`,
            message: `${value.message}`,
          },
        },
      });
      console.log("response", response);
      setLoading(false);

      notification.open({
        message: "Success",
        description: "You have successfully sent your message. Thank you!",
        placement: "topRight",
        type: "success",
      });

      window.scrollTo(0, 0);
    } catch (error) {
      console.log("error", error);
      notification.open({
        message: "Error",
        description: "You have failed sent your message, Please try again.",
        placement: "topRight",
        type: "error",
      });
    }

    form.resetFields();
  };

  return (
    <div className={styles.contact_section}>
      <Container>
        {/* <Row>
          <Col md={12} lg={12} xs={12}>
            <div>
              <h1 className={styles.contact_title}>Contact Us</h1>
            </div>
          </Col>
        </Row> */}

        {/* <Row className={styles.contact_wrapper}>
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
        </Row> */}

        <Row className="mb-5 text-center">
          <Col md={12} lg={12} xs={12}>
            <p className={styles.form_sub}>Get in Touch</p>
            <h2 className={styles.form_title}>Ready to Get Started?</h2>
            {/* <p className={styles.form_text}>
              Your email address will not be published. Required fields are
              marked *
            </p> */}
          </Col>
        </Row>

        <Row className="mb-5 mt-5">
          <Col md={5} lg={5} xs={12}>
            <div>
              <Lottie
                animationData={ContactVector}
                loop={true}
                autoPlay={true}
              />
            </div>
          </Col>
          <Col md={7} lg={7} xs={12}>
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
            {/* <Form
              form={form}
              name="contact"
              onFinish={onFinished}
              initialValues={{
                fullName: "",
                email: "",
                mobileNumber: "",
                message: "",
              }}
            >
              <Form.Item
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name",
                  },
                ]}
              >
                <Input placeholder="Your full name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Your email address" />
              </Form.Item>
              <Form.Item
                name="mobileNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number",
                  },
                ]}
              >
                <Input placeholder="Your phone number" />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please input your message",
                  },
                ]}
              >
                <TextArea placeholder="Write message" rows={5} />
              </Form.Item>

              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                size="large"
                block
              >
                Submit
              </Button>
            </Form> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
