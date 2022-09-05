import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "reactstrap";
import styles from "../../../styles/Services.module.css";
import ImageCol from "../../../assets/images/services/structure-cabling.jpg";

export default function ServiceDetails() {
  return (
    <section className={styles.services_section}>
      <Container>
        <Row className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
          <Col md={6} lg={6} xs={12}>
            <h1 className="display-2 mb-0">Structured Cabling Services</h1>
          </Col>
          <Col md={6} lg={6} xs={12}>
            <p className={styles.services_details}>
              Are you looking for structured cabling? Structured cabling is the
              design and implementation of a cabling system that can support
              multiple hardware uses and be acceptable for both present and
              future demands. Current and future needs can be met, and future
              hardware additions will be supported by a properly installed
              system.
            </p>
            <Button color="primary">Start your project</Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={7} lg={7} xs={12}>
            <h2>Benefits of Structured Cabling</h2>
            <Row className="mt-4">
              <Col md={12} lg={12} xs={12}>
                <p>
                  Structured cabling systems are the most efficient way to
                  implement in your workspace, because they are highly
                  organized, simple to use, and easy to access. A structured
                  cabling system is an easy to manage and maintain solution that
                  will benefit your business for many years.
                </p>
                <p>
                  A structured cabling system improves performance and drives
                  business growth by increasing flexibility. This is due to its
                  ability to accommodate movement, additions, and changes
                  quickly and easily, reducing installation time and ensuring
                  optimal adaptability to any changes to the network
                  infrastructure.
                </p>
                <p>
                  Reduced downtime is the result of the simplicity with which
                  various connectivity issues may be resolved thanks to
                  structured cabling. When using different wire infrastructure,
                  it is possible that you will spend a lot of time attempting to
                  pinpoint a cable that has produced an issue. Since employees
                  will have to wait until network troubleshooting is finished,
                  this can lower productivity, which reduces your company's
                  income. Structured cabling, on the other hand, quickly
                  resolves these issues, cutting down on downtime.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={5} lg={5} xs={12}>
            <Image
              src={ImageCol}
              alt="structure-cabling"
              className="mt-5"
              height={800}
              width={1000}
              objectFit="contain"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
