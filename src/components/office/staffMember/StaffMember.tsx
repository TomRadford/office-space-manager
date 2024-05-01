import IconWrapper from "@/components/common/icons/IconWrapper";
import MenuIcon from "@/components/common/icons/MenuIcon";
import StaffContextMenu from "@/components/office/staffMember/dialogContent/StaffContextMenu";
import { useAppModal } from "@/utils/hooks/modal";
import type { StaffMember } from "@prisma/client";

const StaffMember = ({ staffMember }: { staffMember: StaffMember }) => {
  const modal = useAppModal();

  const handleMenu = async () => {
    await modal.show({
      content: <StaffContextMenu staffMember={staffMember} />,
      closeOnOutsideClick: true,
    });
  };

  return (
    <div className="flex w-full items-center gap-6">
      <div className="h-[52px] w-[52px]">
        <img src={staffMember.avatarUri} />
      </div>
      <div>
        <p className="flex-0">
          {staffMember.firstName} {staffMember.lastName}
        </p>
      </div>
      <div className="flex grow justify-end">
        <IconWrapper onClick={handleMenu} IconComponent={MenuIcon} />
      </div>
    </div>
  );
};

export default StaffMember;
