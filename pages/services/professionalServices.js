import React from "react";
import Head from "next/head";
import Details from "../../view/pages/services/Professional";

export default function professioal_services() {
  return (
    <div>
      <Head>
        <title>Meta Phil-Tech Corporation</title>
        <meta name="description" content="Meta Phil-Tech Corporation" />
        <link rel="icon" href="/logo_2.jpg" />
      </Head>
      <div className="wrapper">
        <Details />
      </div>
    </div>
  );
}
