import "@/styles/globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={firaCode.className}>
      <Component {...pageProps} />
    </main>
  );
}
