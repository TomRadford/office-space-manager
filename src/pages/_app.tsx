import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import NiceModal from "@ebay/nice-modal-react";

import { api } from "@/utils/api";

import "@/styles/globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NiceModal.Provider>
      <main
        className={`font-sans ${inter.variable} min-h-screen bg-background`}
      >
        <div className="mx-auto max-w-3xl px-4">
          <Component {...pageProps} />
        </div>
      </main>
    </NiceModal.Provider>
  );
};

export default api.withTRPC(MyApp);
