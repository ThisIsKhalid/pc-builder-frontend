import { Fira_Code } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

const MainLayout = ({ children }) => {
  return (
    <div className={firaCode.className}>
      <Header />
      <main className="min-h-screen px-5 md:px-0">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
