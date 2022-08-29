import React, { useState } from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { Menu } from "antd";

import styles from "../../../styles/Services.module.css";

export default function Section() {
  const [current, setCurrent] = useState("general");

  const items = [
    {
      label: "General Business Consultancy",
      key: "general",
    },
    {
      label: "Specific Business Consultancy",
      key: "specific",
    },
    {
      label: "Government Delinquency Process and Consultancy",
      key: "government",
    },
    {
      label: "Company Labor and Standards",
      key: "companyLabor",
    },
    {
      label: "Company Manual Standards",
      key: "manualStandard",
    },
    {
      label: "Government Permit Processes",
      key: "permitProcess",
    },
    {
      label: "Import and Export Process",
      key: "importExport",
    },
    {
      label: "Network Estimation Cost",
      key: "estimationCost",
    },
    {
      label: "Project Estimation Cost",
      key: "projectCost",
    },
    {
      label: "Network Design",
      key: "networkDesign",
    },
    {
      label: "Software Engineering Services",
      key: "softwareServices",
    },
    {
      label: "Network Professional Troubleshooting Services",
      key: "networkServices",
    },
    {
      label: "Company Software Provider",
      key: "softwareProvider",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className={styles.services_section}>
      <Container className="pl-5 pr-5" fluid>
        <Row>
          <Col md={6} lg={6} xs={12}>
            <div>
              <h1 className={styles.services_title}>Professional Services</h1>
              <p className={styles.services_sub}>
                We choose our teams carefully. Our people are the secret to
                great work.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} xs={12}></Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col md={4} lg={4} xs={12}>
            <p className={styles.menu_title}>Offered Services</p>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="vertical"
              items={items}
            />
          </Col>
          <Col md={8} lg={8} xs={12}>
            <div className={styles.services_container}>
              <Card>
                <Row className="align-items-md-center">
                  <Col md={5} lg={5} xs={5}>
                    <div className={styles.services_pinned}>
                      <CardImg
                        alt="services"
                        src="https://picsum.photos/900/180"
                        style={{
                          height: 180,
                        }}
                        top
                        width="100%"
                      />
                    </div>
                  </Col>
                  <Col md={7} lg={7} xs={7}>
                    <Row className="mb-3">
                      <Col>
                        <p className={styles.services_cardTitle}>
                          General Business Consultancy
                        </p>
                        <p className={styles.services_cardSub}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <p className={styles.services_learn}>Learn More</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
              <Card>
                <Row className="align-items-md-center">
                  <Col md={5} lg={5} xs={5}>
                    <div className={styles.services_pinned}>
                      <CardImg
                        alt="services"
                        src="https://picsum.photos/900/180"
                        style={{
                          height: 180,
                        }}
                        top
                        width="100%"
                      />
                    </div>
                  </Col>
                  <Col md={7} lg={7} xs={7}>
                    <Row className="mb-3">
                      <Col>
                        <p className={styles.services_cardTitle}>
                          Specific Business Consultancy
                        </p>
                        <p className={styles.services_cardSub}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <p className={styles.services_learn}>Learn More</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
              <Card>
                <Row className="align-items-md-center">
                  <Col md={5} lg={5} xs={5}>
                    <div className={styles.services_pinned}>
                      <CardImg
                        alt="services"
                        src="https://picsum.photos/900/180"
                        style={{
                          height: 180,
                        }}
                        top
                        width="100%"
                      />
                    </div>
                  </Col>
                  <Col md={7} lg={7} xs={7}>
                    <Row className="mb-3">
                      <Col>
                        <p className={styles.services_cardTitle}>
                          Government Delinquency Process and Consultancy
                        </p>
                        <p className={styles.services_cardSub}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <p className={styles.services_learn}>Learn More</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
