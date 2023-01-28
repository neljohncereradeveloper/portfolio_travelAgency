import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../src/components/dashboard";
import DashboardTwo from "../src/components/dashboard-2";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Davao Travel Agency | Dashboard</title>
        <meta
          name="description"
          content="Disawake Portfolio Nextjs TailwindCss Template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Dashboard /> */}
      <DashboardTwo />
    </>
  );
};

export default Home;
