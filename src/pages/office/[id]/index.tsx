import Header from "@/components/common/Header";
import Skeleton from "@/components/common/Skeleton";
import AddButton from "@/components/common/button/AddButton";
import DisplayOffice from "@/components/office/DisplayOffice";
import EditStaffMember from "@/components/office/staffMember/dialogContent/EditStaffMember";
import { api } from "@/utils/api";
import { TITLE } from "@/utils/constants";
import { useAppModal } from "@/utils/hooks/modal";
import { isNumber, isString } from "@/utils/typeguards";
import { DialogDescription } from "@radix-ui/react-dialog";
import Head from "next/head";
import { useRouter } from "next/router";

const EditOfficePage = () => {
  const router = useRouter();
  const id = router.query.id;
  const modal = useAppModal();
  // ToDo: we could optimise these query by using the cache
  // from the getAll query minus the staff members
  const getOffice = api.office.getOne.useQuery(
    {
      id: parseInt(id as string),
      staff: true,
    },
    { enabled: isString(id) },
  );

  const handleAddStaffMember = async () => {
    if (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      getOffice.data?.staffMembers.length >= getOffice.data?.maximumCapacity
    ) {
      return modal.show({
        // ToDo: ask design team for feedback on this dialog
        content: (
          <DialogDescription className="text-center">
            This office has reached its maximum capacity 🫣
          </DialogDescription>
        ),
        closeOnOutsideClick: true,
      });
    }
    if (isNumber(getOffice.data?.id)) {
      await modal.show({
        content: <EditStaffMember officeId={getOffice.data?.id} />,
      });
    }
  };

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
      <AddButton onClick={handleAddStaffMember} />
    </>
  );
};
export default EditOfficePage;
