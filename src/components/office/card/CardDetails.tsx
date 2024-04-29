import CardItem from "@/components/office/card/CardItem";
import EmailIcon from "@/components/common/icons/EmailIcon";
import { LocationIcon } from "@/components/common/icons/LocationIcon";
import PeopleIcon from "@/components/common/icons/PeopleIcon";
import PhoneIcon from "@/components/common/icons/PhoneIcon";

const CardDetails = ({
  phone,
  email,
  staffCount,
  address,
}: Record<"phone" | "email" | "staffCount" | "address", string>) => (
  <>
    <CardItem IconComponent={PhoneIcon}>{phone}</CardItem>
    <CardItem IconComponent={EmailIcon}>{email}</CardItem>
    <CardItem IconComponent={PeopleIcon}>
      Office Capacity: {staffCount}
    </CardItem>
    <CardItem IconComponent={LocationIcon}>{address}</CardItem>
  </>
);

export default CardDetails;
