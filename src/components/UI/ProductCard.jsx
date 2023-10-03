import { addComponent } from "@/redux/pcSlice/pcSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const handelAddComponent = (category) => {
    if (session?.user) {
      dispatch(addComponent({ category, product }));
      router.push("/pc_builder");
    } else {
      toast.error("Please login");
    }
  };

  const { name, image, category, price, status, individualRating } = product;
  return (
    <div className="card bg-gray-200 shadow-xl border border-gray-300 h-[500px]">
      <figure>
        <Image src={product?.image} alt="image" width={500} height={500} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          <div
            className={`${
              product?.status === true ? "text-blue-500" : "text-red-500"
            }  badge badge-outline`}
          >
            {product?.status === true ? "In Stock" : "Out of Stock"}
          </div>
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {Array.from({ length: product?.averageRating }).map((_, index) => (
              <BsFillStarFill key={index} className="text-red-500" />
            ))}
          </div>
        </div>
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="card-title font-bold">$ {price}</p>
        <div className="flex items-center justify-between gap-2">
          <button
            className="btn btn-primary w-1/2"
            onClick={() => handelAddComponent(product?.category)}
          >
            Add to Build
          </button>
          <Link href={`/products/${product?._id}`} className="w-1/2">
            <button className="btn btn-secondary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
