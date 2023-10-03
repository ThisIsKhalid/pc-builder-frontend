/* eslint-disable @next/next/no-img-element */

import MainLayout from "@/components/Layout/MainLayout";
import { featuredCategories } from "@/utils";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const Featured = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Featured</title>
        <link rel="icon" href="/Extreme.png" />
      </Head>
      <div className="text-center  py-2 sm:py-5">
        <h1 className="text-center  font-poppins text-2xl">
          Featured Category
        </h1>
        <p className="text-center">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className="py-12 px-5 md:px-16">
        <div className="grid grid-cols-3 gap-14">
          {featuredCategories?.map((category) => (
            <>
              <Link href={`categories/${category.key}`}>
                <div className="flex flex-col justify-center items-center  transform duration-500 shadow hover:shadow-2xl hover:scale-100 border-none bg-gray-100 py-5">
                  <div className="flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.label}
                      className="w-24 h-24 object-cover"
                    />
                  </div>
                  <div className="featured-category-name text-center font-medium pt-3 text-lg">
                    {category.label}
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Featured;

Featured.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/categories`;
  try {
    const response = await axios.get(apiUrl);
    const categories = response.data;
    return {
      props: {
        categories: categories?.data,
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
};
