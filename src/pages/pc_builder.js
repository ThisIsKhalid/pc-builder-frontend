import MainLayout from "@/components/Layout/MainLayout";
import MyPcBuild from "@/components/UI/MyPcBuild";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PcBuilderPage = () => {
  // const router = useRouter();

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkSession = async () => {
  //     const session = await getSession();
  //     if (!session) {
  //       toast.error('Please Login');
  //       router.push("/signin");
  //     }
  //     setLoading(false);
  //   };

  //   checkSession();
  // }, [router]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Head>
        <title>PC Build</title>
        <link rel="icon" href="/Extreme.png" />
      </Head>
      <MyPcBuild />
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
