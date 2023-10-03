import MainLayout from "@/components/Layout/MainLayout";
import Products from "@/components/UI/Products";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = ({ products }) => {
  const router = useRouter();
  // console.log(products);
  const categoryName = router?.query?.category || "Category";

  return (
    <div>
      <Head>
        <title>Categories/{categoryName}</title>
        <link rel="icon" href="/pc.png" />
      </Head>
      {products ? (
        <Products products={products} />
      ) : (
        <p>Loading products...</p> // Add a loading indicator
      )}
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/categories`;
  try {
    const response = await axios.get(apiUrl);
    const categories = response.data;
    const paths = categories?.data?.map((category) => ({
      params: { category: category?.name },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
};

export async function getStaticProps({ params }) {
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/products`;
  try {
    const response = await axios.get(apiUrl);
    const categoryData = response.data;
    const result = categoryData?.data?.data?.filter(
      (product) => product?.category === params?.category
    );
    return {
      props: {
        products: result,
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
