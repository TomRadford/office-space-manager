import Header from "@/components/common/Header";
import EditOffice from "@/components/office/EditOffice";
import { TITLE } from "@/utils/constants";
import Head from "next/head";

const AddOfficePage = () => {
  return (
    <>
      <Head>
        <title>New Office | {TITLE}</title>
      </Head>
      <Header href="/" title="New Office" />
      <EditOffice />
    </>
  );
};
export default AddOfficePage;
