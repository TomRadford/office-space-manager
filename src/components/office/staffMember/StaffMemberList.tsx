import SearchInput from "@/components/common/input/SearchInput";
import StaffMember from "@/components/office/staffMember/StaffMember";
import type { StaffMember as StaffMemberType } from "@prisma/client";
import { useState } from "react";

const StaffMemberList = ({
  staffMembers,
}: {
  staffMembers: StaffMemberType[];
}) => {
  const [search, setSearch] = useState("");
  // ToDo: Implement search functionality through API instead of filtering in the ui
  return (
    <div>
      <SearchInput onSearch={(s) => setSearch(s)} search={search} />
      <div className="mt-6 flex items-center justify-between">
        <h3 className="font-semibold">Staff Members in Office</h3>
        <p className=" text-lg font-normal">{staffMembers.length}</p>
      </div>
      <div className="mt-6">
        {staffMembers.map((staffMember) => (
          <StaffMember staffMember={staffMember} key={staffMember.id} />
        ))}
      </div>
    </div>
  );
};

export default StaffMemberList;
