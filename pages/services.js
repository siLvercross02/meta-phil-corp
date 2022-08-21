import React from "react";
import Head from "next/head";
import Section from "../view/pages/services/Section";

export default function services() {
  return (
    <div>
      <Head>
        <title>Meta Phil-Tech Corporation</title>
        <meta name="description" content="Meta Phil-Tech Corporation" />
        <link rel="icon" href="/logo_2.jpg" />
      </Head>
      <div className="wrapper">
        <Section />
      </div>
    </div>
  );
}
