import React, { useState } from "react";
import Lottie from "lottie-react";
import { Container, Row, Col, Card, CardBody, CardDeck } from "reactstrap";
import { Menu } from "antd";
import {
  FcSettings,
  FcCableRelease,
  FcFullBattery,
  FcMultipleCameras,
  FcEngineering,
} from "react-icons/fc";

import styles from "../../../styles/Services.module.css";

import WebDev from "../../../public/json/web-dev.json";
import MobileDev from "../../../public/json/mobile-dev.json";
import DeskDev from "../../../public/json/desktop-app.json";
import ApiDev from "../../../public/json/api-dev.json";
import DatabaseDev from "../../../public/json/database-dev.json";

export default function Section() {
  const [current, setCurrent] = useState("software");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: "software",
      label: "Software Development",
      icon: <FcEngineering />,
    },
    {
      key: "structureCabling",
      label: "Structured Cabling",
      icon: <FcCableRelease />,
    },

    {
      key: "solarPower",
      label: "Solar Power System",
      icon: <FcFullBattery />,
    },
    {
      key: "surveillance",
      label: "Surveillance System Installation",
      icon: <FcMultipleCameras />,
    },
    {
      key: "accessControl",
      label: "Access Control System",
      icon: <FcSettings />,
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className={styles.services_section}>
      <Container>
        <Row>
          <Col md={6} lg={6} xs={12}>
            <div>
              <h1 className={styles.services_title}>Offered Services</h1>
              <p className={styles.services_sub}>
                We choose our teams carefully. Our people are the secret to
                great work.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} xs={12}></Col>
        </Row>

        <Row className="mt-3 mb-5">
          <Col md={12} lg={12} xs={12} className="pl-2 pr-2">
            <Menu
              onClick={onClick}
              defaultOpenKeys={["software"]}
              selectedKeys={[current]}
              mode="horizontal"
              items={menuItems}
              inlineCollapsed={collapsed}
              theme="light"
            />
          </Col>
        </Row>
        {/* Custom Software */}
        {current === "software" && (
          <Row className="mt-5 mb-5">
            <Col md={12} lg={12} xs={12}>
              <Row>
                <Col md={12} lg={12} xs={12}>
                  <h3 className={styles.services_title_new}>
                    Custom Software Development Services
                  </h3>
                  <p className={styles.services_text_new}>
                    As you take on complex development projects to expand your
                    business, you'll need the best partner for your
                    requirements. Software developers are in charge of
                    converting data into an organized structure for a product.
                  </p>
                  <h5 className={styles.services_sub_new}>
                    Our Software Development Services
                  </h5>
                </Col>
              </Row>

              <CardDeck className="mt-4 pl-3 pr-3">
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
              </CardDeck>

              <Row className="mt-4 pl-3 pr-3">
                <h5 className={styles.services_sub_new}>
                  Benefits of Custom Software Development
                </h5>
                <ul className={styles.services_ul_new}>
                  <li className="mb-3">
                    The primary reason for developing custom software is that
                    your company desires ownership of the solution. Businesses
                    can use software functions and data to develop
                    methodologies, for example. Businesses that use customized
                    software can make changes whenever they want, add important
                    information, and implement customer feedback. Developing an
                    interactive relationship with customers boosts your
                    company's credibility and stickiness.
                  </li>
                  <li className="mb-3">
                    Businesses can alter bespoke software at any time to suit
                    their needs. And if you're wise, scalability will be one of
                    the features that you identified as essential in your
                    project's first scope. On the other hand, commercial
                    software cannot be changed at will. Furthermore, if you make
                    any changes, you'll probably break the terms of your license
                    with the makers of your commercial software, which will
                    prevent the application from being maintained and made
                    usable in the future.
                  </li>
                  <li className="mb-3">
                    Integrating custom software with your current business
                    software should be simple if you have developers on staff or
                    retained. Furthermore, custom software can implement
                    existing processes without being constrained by the
                    constraints of an arbitrary API.
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
        )}

        {/* structure cabling */}
        {current === "structureCabling" && (
          <Row className="mt-5 mb-5">
            <Col md={12} lg={12} xs={12}>
              <h3 className={styles.services_title_new}>
                Structured Cabling Services
              </h3>
              <p className={styles.services_text_new}>
                Are you looking for structured cabling? Structured cabling is
                the design and implementation of a cabling system that can
                support multiple hardware uses and be acceptable for both
                present and future demands. Current and future needs can be met,
                and future hardware additions will be supported by a properly
                installed system.
              </p>

              <h5 className={styles.services_sub_new}>
                Our structured cabling services include both supply and
                installation
              </h5>

              <ul className={styles.services_ul_new}>
                <li className="mb-3">
                  Structure cabling design & installation
                </li>
                <li className="mb-3">Fiber optic cabling</li>
                <li className="mb-3">Data network cabling</li>
                <li className="mb-3">Coaxial cabling</li>
                <li>Patch panel termination</li>
              </ul>

              <h5 className={styles.services_sub_new}>
                Benefits of Structured Cabling
              </h5>
              <ul className={styles.services_ul_new}>
                <li className="mb-3">
                  Structured cabling systems are the most efficient way to
                  implement in your workspace, because they are highly
                  organized, simple to use, and easy to access. A structured
                  cabling system is an easy to manage and maintain solution that
                  will benefit your business for many years.
                </li>
                <li className="mb-3">
                  A structured cabling system improves performance and drives
                  business growth by increasing flexibility. This is due to its
                  ability to accommodate movement, additions, and changes
                  quickly and easily, reducing installation time and ensuring
                  optimal adaptability to any changes to the network
                  infrastructure.
                </li>
                <li>
                  Reduced downtime is the result of the simplicity with which
                  various connectivity issues may be resolved thanks to
                  structured cabling. When using different wire infrastructure,
                  it is possible that you will spend a lot of time attempting to
                  pinpoint a cable that has produced an issue. Since employees
                  will have to wait until network troubleshooting is finished,
                  this can lower productivity, which reduces your company's
                  income. Structured cabling, on the other hand, quickly
                  resolves these issues, cutting down on downtime.
                </li>
              </ul>
            </Col>
          </Row>
        )}

        {/* surveillance system installation */}
        {current === "surveillance" && (
          <Row className="mt-5 mb-5">
            <Col md={12} lg={12} xs={12}>
              <h3 className={styles.services_title_new}>
                Surveillance System Installation
              </h3>
              <p className={styles.services_text_new}>
                Are you thinking of installing a new surveillance system to
                monitor your home, office, business, or other property? Would
                you like to be able to use your smartphone to instantly observe
                every inch of your property and even prevent crime from
                happening?
              </p>
              <h5 className={styles.services_sub_new}>
                Benefits of Surveillance System
              </h5>
              <ul className={styles.services_ul_new}>
                <li className="mb-3">
                  These systems can be used on both the inside and outside of a
                  building or property. They can be set to record continuously,
                  only in response to movement, or only at specific times of the
                  day.
                </li>
                <li className="mb-3">
                  A security guard can monitor footage in real time, remotely by
                  a monitoring company if an IP camera and system are used, or
                  simply recorded and stored by a DVR (Digital Video Recorder)
                  or NVR (Network Video Recorder) for later review if necessary.
                  If an NVR is connected to the Internet, you can also monitor
                  in real time using a smartphone.
                </li>
                <li>
                  Surveillance systems are closed, which means that their
                  signals are not broadcast, making it possible for others to
                  intercept and view the content. The recorded material is only
                  accessible to authorized users.
                </li>
              </ul>
            </Col>
          </Row>
        )}

        {/* access control */}
        {current === "accessControl" && (
          <Row className="mt-5 mb-5">
            <Col md={12} lg={12} xs={12}>
              <h3 className={styles.services_title_new}>
                Access Control System and Time-in Attendance Installation
              </h3>
              <p className={styles.services_text_new}>
                Are you planning to install an access control system and time-in
                attendance? Protect your employees with an access control system
                that prevents unauthorized people from entering your facility.
                Keep track of your employee's daily attendance, working hours,
                breaks, login, and logout times.
              </p>
              <h5 className={styles.services_sub_new}>
                Benefits of Access Control System and Time-in Attendance
              </h5>

              <ul className={styles.services_ul_new}>
                <li className="mb-3">
                  One of the most appealing features of ACS (Access Control
                  Systems) is their ability to simplify the management of
                  employee credentials, entrance security, and tracking. Using
                  access control systems allows you to track and monitor all
                  entryway activity from a single remote location.
                </li>

                <li className="mb-3">
                  A modern ACS (Access Control System) makes it easy to define
                  specific access hours for employees, visitors or even entire
                  groups. Whether you want to set access times for your
                  employees during work hours or you're hosting guests for an
                  all-day gathering, you can remotely adjust the date and time
                  of access with just a few taps.
                </li>
                <li className="mb-3">
                  Access times can be changed in seconds without interfering
                  with your current security protocols.
                </li>
                <li className="mb-3">
                  Manual timesheets are subject to human error. Illegible
                  handwriting can lead to inaccurate recording of wages. If the
                  employee objects later, time must be given to adjust the
                  payslip after the end of the pay period. Some employees may
                  abuse the manual system by stealing time and entering or
                  leaving with inaccurate times.
                </li>
                <li>
                  Time and attendance software eliminates time theft and reduces
                  human error by leveraging electronic data captured as
                  employees time in and out of an electronic biometric clock
                  using a fingerprint, a facial scan, or an access card.
                </li>
              </ul>
            </Col>
          </Row>
        )}

        {/* Solar power */}
        {current === "solarPower" && (
          <Row className="mt-5 mb-5">
            <Col md={12} lg={12} xs={12}>
              <h3 className={styles.services_title_new}>
                Solar Power System Services
              </h3>
              <p className={styles.services_text_new}>
                Are you considering having a solar power system installed? We
                offer solar power systems installed in homes, schools,
                hospitals, and offices can provide several benefits, including
                lower electric bills and smaller carbon footprints. The sun is a
                storehouse of pure energy, and the world receives a significant
                amount of it each day. Technology has now enabled us to use
                solar energy, providing us with access to the most limitless
                source of electricity currently available. Solar panels have
                become a practical and affordable way to harness solar energy
                after many years of development and research.
              </p>

              <h5 className={styles.services_sub_new}>
                Our Solar Power System Services
              </h5>
              <ul className={styles.services_ul_new}>
                <li className="mb-3">
                  Off-grid means not linked to the general power grid.
                </li>
                <li>On-grid means linked to the general power grid</li>
              </ul>

              <h5 className={styles.services_sub_new}>
                Benefits of Solar Power System
              </h5>

              <ul className={styles.services_ul_new}>
                <li className="mb-3">
                  The reality that solar energy is a completely renewable energy
                  source is the most significant advantage of solar panels,
                  among all their other advantages. It is available every day
                  and can be used anywhere in the world. Unlike some other
                  energy sources, solar energy never runs out.
                </li>

                <li className="mb-3">
                  Because you will be using some of the electricity generated by
                  your solar power system to satisfy your demands, your
                  electricity costs will be lower. The size of the solar power
                  system and how much heat or electricity you use will decide
                  how much you save on your bill.
                </li>
                <li>
                  Solar power systems, in general, do not require a lot of
                  maintenance. You only have to keep them relatively clean, so
                  having to clean them two times a year will be enough.
                </li>
              </ul>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
