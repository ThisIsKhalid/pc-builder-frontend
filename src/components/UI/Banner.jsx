import Image from "next/image";
import laptop from "../../assets/Microsoft-Surface-Laptop-5-Main-Slide_1695282543.webp";
import desktop from "../../assets/budget-desktop-pc-27k.webp";
import order from "../../assets/online-order-web-sider_1695036965.webp";

const Banner = () => {
  return (
    <div className="">
      <div className="flex lg:flex-row flex-col items-center gap-2">
        <Image src={laptop} width={1000} alt="" className="lg:w-[70%]" />
        <div className="flex lg:flex-col flex-row gap-2 lg:w-[30%]">
          <Image src={order} width={1000} alt="" className="w-1/2 lg:w-full" />
          <Image
            src={desktop}
            width={1000}
            alt=""
            className="w-1/2 lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
