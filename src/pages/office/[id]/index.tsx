import { Office, StaffMember } from "@prisma/client";

/**
 * Office display component
 */
const OfficePage = ({
  office,
}: {
  office?: Office & { staffMembers: StaffMember[] };
}) => {};

export default OfficePage;
