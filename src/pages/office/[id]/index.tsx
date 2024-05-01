import Header from "@/components/common/Header";
import Skeleton from "@/components/common/Skeleton";
import DisplayOffice from "@/components/office/DisplayOffice";
import { api } from "@/utils/api";
import { TITLE } from "@/utils/constants";
import { isString } from "@/utils/typeguards";
import Head from "next/head";
import { useRouter } from "next/router";

const EditOfficePage = () => {
  const router = useRouter();
  const id = router.query.id;
  // ToDo: we could optimise these query by using the cache
  // from the getAll query minus the staff members
  const getOffice = api.office.getOne.useQuery(
    {
      id: parseInt(id as string),
      staff: true,
    },
    { enabled: isString(id) },
  );
  return (
    <>
      <Head>
        <title>Office | {TITLE}</title>
      </Head>
      <Header href="/" title="Office" />
      {getOffice.isLoading ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : getOffice.data ? (
        <DisplayOffice office={getOffice.data} />
      ) : (
        <h1>No office found</h1>
      )}
    </>
  );
};
export default EditOfficePage;
