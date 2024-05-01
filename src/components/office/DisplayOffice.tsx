import OfficeCard from "@/components/office/card/OfficeCard";
import StaffMemberList from "@/components/office/staffMember/StaffMemberList";
import type { Office, StaffMember } from "@prisma/client";

const DisplayOffice = ({
  office,
}: {
  office: Office & { staffMembers: StaffMember[] };
}) => {
  return (
    <div className="flex flex-col gap-6">
      <OfficeCard office={office} staffCount={office.staffMembers.length} />
      <StaffMemberList staffMembers={office.staffMembers} />
    </div>
  );
};

export default DisplayOffice;
