import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "@/utils/api";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable} min-h-screen bg-background`}>
      <div className="mx-auto max-w-3xl px-4">
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default api.withTRPC(MyApp);
