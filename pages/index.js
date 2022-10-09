import React, { useEffect } from "react";
import { notification } from "antd";
import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  useEffect(() => {
    const notif = () => {
      notification.open({
        message: "We're Building our Website",
        description:
          "Sorry our website is under construction & launching soon.",
        type: "info",
        placement: "bottomLeft",
        duration: 5,
      });
    };

    notif();
  }, []);

  return (
    <div>
      <Head>
        <title>Meta Phil-Tech Corporation</title>
        <meta name="description" content="Meta Phil-Tech Corporation" />
        <link rel="icon" href="/logo_2.jpg" />
      </Head>
      <CustomComponents />
    </div>
  );
}
