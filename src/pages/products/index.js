import MainLayout from "@/components/Layout/MainLayout";
import Products from "@/components/UI/Products";
import axios from "axios";

const AllProducts = ({ products }) => {
  return (
    <div className="">
      <Products products={products} />
    </div>
  );
};

export default AllProducts;

AllProducts.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/products`;
  try {
    const response = await axios.get(apiUrl);
    const categories = response?.data;
    return {
      props: {
        products: categories?.data?.data,
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
