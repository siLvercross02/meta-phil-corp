import "../styles/scss/style.scss";
import "antd/dist/antd.css";
import Layout from "../layout/Layout";
import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <LiveChatLoaderProvider
        provider="messenger"
        providerKey="100083374749162"
        locale="en_US"
      >
        <Messenger />
      </LiveChatLoaderProvider>
    </Layout>
  );
}

export default MyApp;
