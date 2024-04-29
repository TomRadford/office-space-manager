import Head from "next/head";

import { api } from "@/utils/api";
import { OFFICE_COLOURS, TITLE } from "@/utils/constants";
import OfficeCard from "@/components/office/card/OfficeCard";
import type { Office } from "@prisma/client";
import AddButton from "@/components/common/button/AddButton";

export default function OfficeListPage() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>All Offices | {TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex h-[66px] items-center py-4 pb-12 pt-20">
        <h2>All offices</h2>
      </header>
      <main className="">
        <div>
          <OfficeCard
            office={
              {
                id: 1,
                name: "Cool Company",
                phone: "123-456-7890",
                email: "info@company.com",
                color: OFFICE_COLOURS[0],
                address:
                  "123 Main St, Sea Point, Cape Town, South Africa, 7000",
              } as Office
            }
            staffCount={10}
          />
        </div>
      </main>
      <AddButton href="/office/new" />
    </>
  );
}
