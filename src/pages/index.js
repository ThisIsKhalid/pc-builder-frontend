import MainLayout from "@/components/Layout/MainLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import Products from "@/components/UI/Products";
import axios from "axios";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="This is pc builder site  made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pc.png" sizes="any" />
      </Head>
      <Banner />
      <FeaturedCategories />
      <Products products={products} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/products`;
  try {
    const response = await axios.get(apiUrl);
    const products = response.data;
    return {
      props: {
        products: products?.data?.data,
      },
      revalidate: 3600, // 1 hour (3600 seconds)
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
