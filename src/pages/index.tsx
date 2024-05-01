import Head from "next/head";

import { api } from "@/utils/api";
import { TITLE } from "@/utils/constants";
import OfficeCard from "@/components/office/card/OfficeCard";
import AddButton from "@/components/common/button/AddButton";
import Skeleton from "@/components/common/Skeleton";

export default function OfficeListPage() {
  const getAllOffices = api.office.getAll.useQuery();

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
        <div className="mb-24 flex flex-col gap-6">
          {getAllOffices.isLoading
            ? new Array(5)
                .fill(0)
                .map((_, i) => <Skeleton key={i} className="h-36 w-full" />)
            : getAllOffices.data?.map((office) => (
                <OfficeCard
                  office={office}
                  staffCount={office._count.staffMembers}
                  key={office.id}
                />
              ))}
          {getAllOffices.data?.length === 0 && (
            <p>No offices yet, add one below!</p>
          )}
        </div>
      </main>
      <AddButton href="/office/new" />
    </>
  );
}
