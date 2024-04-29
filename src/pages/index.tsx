import Head from "next/head";

import { api } from "@/utils/api";
import { TITLE } from "@/utils/constants";

export default function OfficeListPage() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>All Offices | {TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <div className=" mt-20 ">
          <h2>All offices</h2>
        </div>
      </main>
    </>
  );
}
