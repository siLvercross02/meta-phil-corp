import React, { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { Container, Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Menu } from "antd";

import styles from "../../../styles/Services.module.css";

import WebDev from "../../../public/json/web-dev.json";
import MobileDev from "../../../public/json/mobile-dev.json";
import DeskDev from "../../../public/json/desktop-app.json";
import ApiDev from "../../../public/json/api-dev.json";
import DatabaseDev from "../../../public/json/database-dev.json";

export default function Section() {
  const [current, setCurrent] = useState("structureCabling");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: "software",
      label: "Software Development Services",
      children: [
        {
          key: "sf1",
          label: "Web Development",
        },
        {
          key: "sf2",
          label: "Mobile Development",
        },
        {
          key: "sf3",
          label: "Desktop Application",
        },
        {
          key: "sf4",
          label: "API Development",
        },
        {
          key: "sf5",
          label: "Database Development",
        },
      ],
    },
    {
      key: "structureCabling",
      label: "Structured Cabling Services",
      children: [
        {
          key: "sc1",
          label: "Structure cabling design & installation",
        },
        {
          key: "sc2",
          label: "Fiber optic cabling",
        },
        {
          key: "sc3",
          label: "Data network cabling",
        },
        {
          key: "sc4",
          label: "Coaxial cabling",
        },
        {
          key: "sc5",
          label: "Patch panel termination",
        },
      ],
    },

    {
      key: "solarPower",
      label: "Solar Power System Services",
      children: [
        {
          key: "sp1",
          label: "Off-grid means not linked to the general power grid.",
        },
        {
          key: "sp2",
          label: "On-grid means linked to the general power grid",
        },
      ],
    },

    {
      key: "services",
      label: "Professional Services",
      children: [
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
      ],
    },
    {
      key: "surveillance",
      label: "Surveillance System Installation",
    },
    {
      key: "accessControl",
      label: "Access Control System and Time-in Attendance Installation",
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
              defaultOpenKeys={["software"]}
              selectedKeys={[current]}
              mode="inline"
              items={menuItems}
              inlineCollapsed={collapsed}
            />
          </Col>
          <Col md={8} lg={8} xs={12}>
            <Row>
              <Col md={4} lg={4} xs={12}>
                <Card className={`${styles.card_hover} shadow`}>
                  <CardBody className={styles.card_padding}>
                    <div className="mx-auto text-center">
                      <Lottie
                        animationData={WebDev}
                        loop={true}
                        autoPlay={true}
                        className={styles.services_vector}
                      />
                      <p className={styles.services_card_text}>
                        Web Development
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4} lg={4} xs={12}>
                <Card className={`${styles.card_hover} shadow`}>
                  <CardBody className={styles.card_padding}>
                    <div className="mx-auto text-center">
                      <Lottie
                        animationData={MobileDev}
                        loop={true}
                        autoPlay={true}
                        className={styles.services_vector}
                      />
                      <p className={styles.services_card_text}>
                        Mobile Development
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4} lg={4} xs={12}>
                <Card className={`${styles.card_hover} shadow`}>
                  <CardBody className={styles.card_padding}>
                    <div className="mx-auto text-center">
                      <Lottie
                        animationData={DeskDev}
                        loop={true}
                        autoPlay={true}
                        className={styles.services_vector}
                      />
                      <p className={styles.services_card_text}>
                        Desktop Application
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={4} lg={4} xs={12}>
                <Card className={`${styles.card_hover} shadow`}>
                  <CardBody className={styles.card_padding}>
                    <div className="mx-auto text-center">
                      <Lottie
                        animationData={ApiDev}
                        loop={true}
                        autoPlay={true}
                        className={styles.services_vector}
                      />
                      <p className={styles.services_card_text}>
                        API Development
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4} lg={4} xs={12}>
                <Card className={`${styles.card_hover} shadow`}>
                  <CardBody className={styles.card_padding}>
                    <div className="mx-auto text-center">
                      <Lottie
                        animationData={DatabaseDev}
                        loop={true}
                        autoPlay={true}
                        className={styles.services_vector}
                      />
                      <p className={styles.services_card_text}>
                        Database Development
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
