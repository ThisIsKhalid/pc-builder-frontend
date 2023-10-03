/* eslint-disable @next/next/no-img-element */
import { featuredCategories } from "@/utils";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  return (
    <>
      <div className="py-12 px-5 md:px-16">
        <div className="text-center flex items-center justify-center py-2 sm:py-5">
          <div>
            <h1 className="text-center  font-poppins text-2xl">
              Featured Category
            </h1>
            <p className="text-center">
              Get Your Desired Product from Featured Category!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
          {featuredCategories?.slice(0, 6).map((category) => (
            <Link key={category.key} href={`categories/${category.key}`}>
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
          ))}
        </div>
        <div className="flex items-center justify-center my-10">
          <Link href="/featured">
            <button className="btn btn-primary">See All Category</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedCategories;
