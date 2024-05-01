import Header from "@/components/common/Header";
import Skeleton from "@/components/common/Skeleton";
import EditOffice from "@/components/office/EditOffice";
import { api } from "@/utils/api";
import { TITLE } from "@/utils/constants";
import { isString } from "@/utils/typeguards";
import Head from "next/head";
import { useRouter } from "next/router";

const EditOfficePage = () => {
  const router = useRouter();
  const id = router.query.id;
  const getOffice = api.office.getOne.useQuery(
    {
      id: parseInt(id as string),
    },
    { enabled: isString(id) },
  );
  return (
    <>
      <Head>
        <title>Edit Office | {TITLE}</title>
      </Head>
      <Header onClick={() => router.back()} title="Edit Office" />
      {getOffice.isLoading ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-36 w-full" />
        </div>
      ) : getOffice.data ? (
        <EditOffice office={getOffice.data} />
      ) : (
        <h1>No office found</h1>
      )}
    </>
  );
};
export default EditOfficePage;
