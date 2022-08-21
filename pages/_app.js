import "../styles/scss/style.scss";
import "antd/dist/antd.css";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
