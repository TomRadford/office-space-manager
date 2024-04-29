import Separator from "@/components/common/Separator";
import CardDetails from "@/components/office/card/CardDetails";
import CardItem from "@/components/office/card/CardItem";
import ArrowDownIcon from "@/components/common/icons/ArrowDownIcon";
import EditIcon from "@/components/common/icons/EditIcon";
import GroupIcon from "@/components/common/icons/GroupIcon";
import IconWrapper from "@/components/common/icons/IconWrapper";
import { convertHexToRGBA } from "@/utils/hexToRGBA";
import type { Office } from "@prisma/client";
import { useState } from "react";
import { motion } from "framer-motion";

const OfficeCard = ({
  office,
  staffCount,
}: {
  office: Office;
  staffCount: number;
}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="relative w-full overflow-hidden rounded-lg border-y-[1px] border-lightBlue bg-white ">
      <div
        className="colourBar absolute bottom-0 top-0 w-3 bg-no-repeat"
        // We cant use tailwind here since we need to set the
        // color dynamically based on the hex value
        // of the office colour using styled-jsx
      />
      <style jsx>{`
        .colourBar {
          background: linear-gradient(
            to bottom,
            ${convertHexToRGBA(office.color, 1)} 0%,
            ${convertHexToRGBA(office.color, 1)} 25%,
            ${convertHexToRGBA(office.color, 0.9)} 25%,
            ${convertHexToRGBA(office.color, 0.9)} 50%,
            ${convertHexToRGBA(office.color, 0.8)} 50%,
            ${convertHexToRGBA(office.color, 0.8)} 75%,
            ${convertHexToRGBA(office.color, 0.7)} 75%,
            ${convertHexToRGBA(office.color, 0.7)} 100%
          );
        }
      `}</style>
      <div className="flex flex-col gap-4 py-4 pl-8 pr-4">
        <div className="flex w-full justify-between ">
          <h3>{office.name}</h3>
          <IconWrapper
            IconComponent={EditIcon}
            className=" text-primary"
            onClick={() => {
              console.log("hi");
            }}
          />
        </div>
        <ul>
          <CardItem IconComponent={GroupIcon}>
            <strong>{staffCount}</strong>&nbsp;Staff Members in Office
          </CardItem>
        </ul>
        <Separator />
        <button
          onClick={() => setShowInfo((prev) => !prev)}
          className="mx-auto flex items-center gap-[10px] transition-all"
        >
          <p className="text-sm">More Info</p>
          <div
            className={`transition-transform ${showInfo ? "rotate-180" : ""}`}
          >
            <IconWrapper IconComponent={ArrowDownIcon} />
          </div>
        </button>
        {showInfo && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween" }}
            className="flex flex-col gap-3"
          >
            <CardDetails
              phone={office.phone}
              email={office.email}
              address={office.address}
              staffCount={staffCount.toString()}
            />
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default OfficeCard;
