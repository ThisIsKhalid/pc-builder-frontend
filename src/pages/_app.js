import ToastProvider from "@/components/ToastProvider";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Fira_Code } from "next/font/google";
import { Provider } from "react-redux";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {getLayout(
          <ToastProvider>
            <main className={firaCode.className}>
              <Component {...pageProps} />
            </main>
          </ToastProvider>
        )}
      </Provider>
    </SessionProvider>
  );
}
