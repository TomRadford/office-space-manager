import Button from "@/components/common/button/Button";
import Delete from "@/components/office/dialogContent/Delete";
import EditStaffMember from "@/components/office/staffMember/dialogContent/EditStaffMember";
import { api } from "@/utils/api";
import { useAppModal } from "@/utils/hooks/modal";
import { isNumber } from "@/utils/typeguards";
import type { StaffMember } from "@prisma/client";
import { DialogDescription } from "@radix-ui/react-dialog";

const StaffContextMenu = ({ staffMember }: { staffMember: StaffMember }) => {
  const modal = useAppModal();
  const utils = api.useUtils();

  const deleteStaffMember = api.staffMember.delete.useMutation({
    onSuccess: () => {
      if (isNumber(staffMember.officeId)) {
        utils.office.getOne.setData(
          { id: staffMember.officeId, staff: true },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          (oldData) => {
            return {
              ...oldData,
              staffMembers:
                oldData?.staffMembers.filter((s) => s.id !== staffMember.id) ??
                [],
            };
          },
        );
      }
    },
  });

  const handleEditStaffMember = async () => {
    modal.remove();

    if (isNumber(staffMember.officeId)) {
      await modal.show({
        content: (
          <EditStaffMember
            staffMember={staffMember}
            officeId={staffMember.officeId}
          />
        ),
      });
    }
  };

  const handleRemoveStaffMember = async () => {
    modal.remove();

    await modal.show({
      content: (
        <Delete
          entity="Staff member"
          handleDelete={async () =>
            deleteStaffMember.mutateAsync({ id: staffMember.id })
          }
        />
      ),
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <DialogDescription className="flex flex-col gap-3">
        <Button onClick={handleEditStaffMember}>Edit Staff Member</Button>
        <Button variant="ghost" onClick={handleRemoveStaffMember}>
          Delete Staff Member
        </Button>
      </DialogDescription>
    </div>
  );
};

export default StaffContextMenu;
