import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";

const PcBuilderPage = () => {
  return (
    <div>
      <Head>
        <title>PC Build</title>
        <link rel="icon" href="/Extreme.png" />
      </Head>
      PcBuilderPage
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
