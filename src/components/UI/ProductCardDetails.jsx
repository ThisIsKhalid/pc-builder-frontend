import { addComponent } from "@/redux/pcSlice/pcSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const ProductCardDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState("features");

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div>
            {/* Render Features Content */}
            <div className="my-4">
              <h3 className="text-lg font-bold mb-2">Key Features</h3>
              <ul className="list-disc pl-6">
                {product?.keyFeatures?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "rating":
        return (
          <div className="my-4">
            <h3 className="text-lg font-bold mb-2">Reviews</h3>
            <ul className="list-disc pl-6">
              {product?.reviews?.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          </div>
        );
      case "review":
        return (
          <>
            <div className="my-4">
              <h3 className="text-lg font-bold mb-2">Individual Rating</h3>
              <div className="flex items-center">
                <p>{product?.individualRating}</p>
              </div>
            </div>
            <div className="my-4">
              <h3 className="text-lg font-bold mb-2">Average Rating</h3>
              <div className="flex items-center">
                <p>{product?.averageRating}</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="py-8 sm:py-16 px-6 sm:px-16">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex  w-[50%] justify-center">
          <div className="bg-white m-16">
            <Image
              width={800}
              height={600}
              src={product?.image}
              alt={product?.name}
              className="w-72 h-72 object-cover"
            />
          </div>
        </div>
        <div className="my-4 w-full  md:w-[50%]">
          <span className="text-gray-800 mb-2">{product?.category}</span>
          <h2 className="text-2xl font-bold mb-2">{product?.name}</h2>
          <p
            className={`${
              product?.status === true ? "text-green-500" : "text-red-600"
            } font-semibold mb-2`}
          >
            {product?.status ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-2xl font-bold mb-2">${product?.price}</p>
          <span className="flex text-xl text-orange-400 items-center my-1">
            {Array.from({ length: product?.averageRating }).map((_, index) => (
              <BsFillStarFill key={index} className="text-red-500" />
            ))}
          </span>
          <h3 className="text-lg font-bold mb-2">Description</h3>
          <p>{product?.description}</p>
          <button
            className="btn btn-primary w-1/2 my-2"
            onClick={() => handelAddComponent(product?.category)}
          >
            Add to Build
          </button>
        </div>
      </div>

      <div className="tabs mb-5">
        <a
          className={`tab tab-lifted ${
            activeTab === "features" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("features")}
        >
          Tab 1
        </a>
        <a
          className={`tab tab-lifted ${
            activeTab === "rating" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("rating")}
        >
          Tab 2
        </a>
        <a
          className={`tab tab-lifted ${
            activeTab === "review" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("review")}
        >
          Tab 3
        </a>
      </div>
      {/* Render the active tab content */}
      {renderTabContent()}
    </div>
  );
};

export default ProductCardDetails;
