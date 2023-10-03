import Link from "next/link";
import { useRouter } from "next/router";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const router = useRouter();
  //   console.log(router.asPath);
  let content = null;
  if (router.asPath === "/") {
    content = (
      <div className="px-5 py-8 sm:py-12 md:px-16">
        <div className="py-5">
          <h1 className="text-center font-poppins text-2xl">
            Featured Product
          </h1>
          <p className="text-center text-sm font-poppins font-thin">
            We offer you the expertise and resources to create your perfect PC
          </p>
        </div>
        <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.slice(0, 6).map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center my-5">
          <Link href="/products">
            <button className="btn btn-primary px-10 ">See All</button>
          </Link>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="px-5 md:px-16 py-10">
        <div className="py-5">
          <h1 className="text-center font-poppins text-2xl">Product</h1>
          <p className="text-center text-sm font-poppins font-thin">
            We offer you the expertise and resources to create your perfect PC
          </p>
        </div>
        <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.length > 0 ? (
            products?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))
          ) : (
            <>
              <p className="text-xl text-red-500 font-medium">Products not found!!</p>
            </>
          )}
        </div>
      </div>
    );
  }
  return content;
};
export default Products;
