import React from "react";
import Head from "next/head";
import Banner from "../../view/pages/aboutUs/Banner";
import SectionAbout from "../../view/pages/aboutUs/SectionAbout";
import Experience from "../../view/pages/aboutUs/Experience";
import Management from "../../view/pages/aboutUs/Management";

export default function About() {
  return (
    <div>
      <Head>
        <title>Meta Phil-Tech Corporation</title>
        <meta name="description" content="Meta Phil-Tech Corporation" />
        <link rel="icon" href="/logo_2.jpg" />
      </Head>
      <div className="wrapper">
        <Banner />
        <SectionAbout />
        <Experience />
        <Management />
      </div>
    </div>
  );
}
