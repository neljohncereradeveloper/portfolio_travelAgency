import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutTwo from "../src/layout-2";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LayoutTwo>
      <Component {...pageProps} />
    </LayoutTwo>
  );
};

export default MyApp;
