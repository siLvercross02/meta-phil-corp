import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
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
