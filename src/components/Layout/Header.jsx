import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="navbar bg-primary px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="text-xl lg:hidden">
            <GiHamburgerMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/categories/Processor">CPU/Processor</Link>
                  </li>
                  <li>
                    <Link href="/categories/Motherboard">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="/categories/RAM">RAM</Link>
                  </li>
                  <li>
                    <Link href="/categories/Power Supply Unit">
                      Power Supply Unit
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/Storage Device">
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/Monitor">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/categories/Mouse">Mouse</Link>
                  </li>
                  <li>
                    <Link href="/categories/Others">Others</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Sign-Out</Link>
            </li>
            <li>
              <Link href="/">Sign-In</Link>
            </li>
            <li>
              <Link href="/">Sign-Up</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className=" text-sm font-medium text-error pl-5 lg:pl-0">
          <span className="text-5xl font-bold text-orange-600">PC</span>
          forge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 w-60">
                <li>
                  <Link href="/categories/Processor">CPU/Processor</Link>
                </li>
                <li>
                  <Link href="/categories/Motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/RAM">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/Power Supply Unit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Storage Device">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/Monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/categories/Mouse">Mouse</Link>
                </li>
                <li>
                  <Link href="/categories/Others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/">Sign-Out</Link>
          </li>
          <li>
            <Link href="/">Sign-In</Link>
          </li>
          <li>
            <Link href="/">Sign-Up</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm bg-error text-gray-700 hover:text-gray-900 border-none hover:bg-success">
          PC Builder
        </button>
      </div>
    </div>
  );
};

export default Header;
