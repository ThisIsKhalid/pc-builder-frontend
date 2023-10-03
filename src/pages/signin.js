import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";

const SignUp = () => {
  return (
    <div>
      <Head>
        <title>Signup</title>
        <link rel="icon" href="/pc.png" sizes="any" />
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div className="md:w-[30%] sm:mx-24 mx-4  bg-gray-200 rounded-md p-[20px] text-center text-black md:mx-auto my-12">
          <h3 className="text-xl sm:text-2xl">SIGN UP</h3>

          <div className="flex items-center  justify-center mt-5">
            <button
              className="btn btn-info w-full h-14"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://pc-builder-frontend-seven.vercel.app",
                })
              }
            >
              <p className="text-4xl flex gap-2">
                <BsGoogle /> Google
              </p>
            </button>
          </div>

          <p className="mt-10">
            Back to{" "}
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
