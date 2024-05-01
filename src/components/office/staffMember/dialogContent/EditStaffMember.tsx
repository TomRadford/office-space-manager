import PageIndicator from "@/components/common/PageIndicator";
import Button from "@/components/common/button/Button";
import BackIcon from "@/components/common/icons/BackIcon";
import CloseIcon from "@/components/common/icons/CloseIcon";
import IconWrapper from "@/components/common/icons/IconWrapper";
import ErrorMessage from "@/components/common/input/ErrorMessage";
import TextInput from "@/components/common/input/TextInput";
import AvatarSelector from "@/components/office/staffMember/AvatarSelector";
import { staffMemberInputSchema } from "@/inputSchema/staffMember";
import { api } from "@/utils/api";
import { useAppModal } from "@/utils/hooks/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import type { StaffMember } from "@prisma/client";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type { z } from "zod";

type StaffMemberInput = z.infer<typeof staffMemberInputSchema>;

const EditStaffMember = ({
  staffMember,
  officeId,
}: {
  staffMember?: StaffMember;
  officeId: number;
}) => {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    clearErrors,
    formState: { errors, touchedFields },
  } = useForm<StaffMemberInput>({
    resolver: zodResolver(staffMemberInputSchema),
  });

  const [page, setPage] = useState<1 | 2>(1);

  const utils = api.useUtils();
  const modal = useAppModal();

  const createStaffMember = api.staffMember.create.useMutation({
    onSuccess: (d) => {
      utils.office.getOne.setData({ id: officeId, staff: true }, (oldData) => {
        return {
          ...oldData,
          staffMembers: [...(oldData?.staffMembers ?? []), d],
        };
      });
      modal.remove();
    },
  });

  const onSubmit = (input: StaffMemberInput) => {
    if (staffMember) {
      //update
    } else {
      createStaffMember.mutate({ ...input, officeId });
    }
  };

  const handleNext = async () => {
    if (await trigger(["firstName", "lastName"])) {
      setPage(2);
      clearErrors("avatarUri");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        {page === 2 && (
          <IconWrapper IconComponent={BackIcon} onClick={() => setPage(1)} />
        )}
        <h3>{staffMember ? "Edit" : "New"} Staff Member</h3>
        <IconWrapper IconComponent={CloseIcon} onClick={() => modal.remove()} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {page === 1 ? (
          <>
            <TextInput
              placeholder="First Name"
              {...register("firstName")}
              errorMessage={errors.firstName?.message}
            />
            <TextInput
              placeholder="Last Name"
              {...register("lastName")}
              errorMessage={errors.lastName?.message}
            />
          </>
        ) : (
          <div className="relative">
            <h3 className="mb-6 font-semibold">Avatar</h3>
            <Controller
              control={control}
              name="avatarUri"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <AvatarSelector
                  onChange={onChange} // send value to hook form
                  // onBlur={onBlur} // notify when input is touched/blur
                  selected={value}
                />
              )}
            />
            <AnimatePresence>
              {errors.avatarUri?.message && (
                <div className="absolute -bottom-5 left-0">
                  <ErrorMessage errorMessage={errors.avatarUri?.message} />
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
        <div className="mx-auto">
          <PageIndicator currentPage={page} totalPages={2} />
        </div>
        {page === 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button type="submit" disabled={createStaffMember.isPending}>
            {staffMember ? "Update" : "Add"} Staff Member
          </Button>
        )}
      </form>
    </div>
  );
};

export default EditStaffMember;
