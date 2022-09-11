import React from "react";
import Lottie from "lottie-react";
import { Container, Row, Col, Card, CardBody, CardDeck } from "reactstrap";
import styles from "../../../styles/Services.module.css";

import General from "../../../public/json/general-business.json";
import Specific from "../../../public/json/specific-business.json";
import Government from "../../../public/json/government-process.json";
import CompanyLabor from "../../../public/json/company-labor.json";
import CompanyStandards from "../../../public/json/company-standards.json";
import PermitProcess from "../../../public/json/permit-process.json";
import ImportExport from "../../../public/json/import.json";
import DataScience from "../../../public/json/api-dev.json";

export default function Professional() {
  return (
    <div className={styles.services_section}>
      <Container>
        <Row>
          <Col md={12} lg={12} xs={12}>
            <div>
              <h1 className={styles.services_title}>Professional Services</h1>
              <p className={styles.services_sub}>
                As you take on complex development projects to expand your
                business, you'll need the best partner for your requirements.
                Software developers are in charge of converting data into an
                organized structure for a product.
              </p>
            </div>
          </Col>
        </Row>

        <CardDeck className="mt-4 pl-3 pr-3">
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={General}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>
                  General Business Consultancy
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={Specific}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>
                  Specific Business Consultancy
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={Government}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>
                  Government Delinquency Process and Consultancy
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={CompanyLabor}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>
                  Company Labor and Standards
                </p>
              </div>
            </CardBody>
          </Card>
        </CardDeck>

        <CardDeck className="mt-4 pl-3 pr-3">
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={CompanyStandards}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>
                  Company Manual Standards
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={PermitProcess}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>
                  Government Permit Processes
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={ImportExport}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>
                  Import and Export Process
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className={`${styles.card_hover} shadow`}>
            <CardBody className={styles.card_padding}>
              <div className="mx-auto text-center">
                <Lottie
                  animationData={DataScience}
                  loop={true}
                  autoPlay={true}
                  className={styles.services_vector}
                />
                <p className={styles.services_card_text}>Data Scientist</p>
              </div>
            </CardBody>
          </Card>
        </CardDeck>

        <Row className="mt-4 mb-5 pl-3 pr-3">
          <Col md={12} lg={12} xs={12}>
            <h5 className={styles.services_sub_new}>
              Benefits of Professional Services
            </h5>

            <ul className={styles.services_ul_new}>
              <li className="mb-3">
                The business environment is constantly changing. To thrive in a
                competitive environment, almost all departments require new
                skills on a daily basis. When you outsource, you will get new
                ideas for your business.
              </li>
              <li className="mb-3">
                These are skills that your current employees may lack, or for
                which they may not have the time. The new ideas will help you
                learn new ways to do business and keep up with what's going on
                in the business world.
              </li>
              <li className="mb-3">
                Permanent employees may pose numerous risks to your company. You
                spend a lot of money on training and hiring, but the turnover
                rate is extremely high. They may even quit after investing so
                much money in the training process. Outsourcing ensures
                consistency in your company. You will never feel the impact of
                third-party service providers even after they leave. As a
                result, you will always have a smooth business operation with
                few or no risks.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
