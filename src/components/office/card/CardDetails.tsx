import CardItem from "@/components/office/card/CardItem";
import EmailIcon from "@/components/common/icons/EmailIcon";
import { LocationIcon } from "@/components/common/icons/LocationIcon";
import PeopleIcon from "@/components/common/icons/PeopleIcon";
import PhoneIcon from "@/components/common/icons/PhoneIcon";

const CardDetails = ({
  phone,
  email,
  capacity,
  address,
}: Record<"phone" | "email" | "capacity" | "address", string>) => (
  <>
    <CardItem IconComponent={PhoneIcon}>{phone}</CardItem>
    <CardItem IconComponent={EmailIcon}>{email}</CardItem>
    <CardItem IconComponent={PeopleIcon}>Office Capacity: {capacity}</CardItem>
    <CardItem IconComponent={LocationIcon}>{address}</CardItem>
  </>
);

export default CardDetails;
