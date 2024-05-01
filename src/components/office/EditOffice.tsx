import Button from "@/components/common/button/Button";
import ErrorMessage from "@/components/common/input/ErrorMessage";
import TextInput from "@/components/common/input/TextInput";
import ColourSelector from "@/components/office/ColourSelector";
import DeleteOffice from "@/components/dialogContent/DeleteOffice";
import { officeInputSchema } from "@/inputSchema/office";
import { api } from "@/utils/api";
import { useAppModal } from "@/utils/hooks/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Office } from "@prisma/client";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { Controller, useForm } from "react-hook-form";
import type z from "zod";

type OfficeInput = z.infer<typeof officeInputSchema>;

/**
 * Office edit/add component
 */
const EditOffice = ({ office }: { office?: Office }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OfficeInput>({
    resolver: zodResolver(officeInputSchema),
    defaultValues: office
      ? { ...office, maximumCapacity: office.maximumCapacity.toString() }
      : undefined,
  });

  const utils = api.useUtils();
  const router = useRouter();
  const modal = useAppModal();

  const createOffice = api.office.create.useMutation({
    onSuccess: (newOffice) => {
      utils.office.getAll.setData(undefined, (oldData) => [
        ...(oldData ?? []),
        { ...newOffice, _count: { staffMembers: 0 } },
      ]);
      router.back();
    },
  });

  const updateOffice = api.office.update.useMutation({
    // Update query cache with the response for instant feedback
    // on a slow connection. This prevents showing stale data during
    // invalidation (ie: when the query is being updated in the background)
    onSuccess: (updatedOffice) => {
      utils.office.getOne.setData(
        { id: updatedOffice.id, staff: undefined },
        (oldData) => ({
          ...updatedOffice,
          // Since we dont mutate staff members, we'll keep the old data
          staffMembers: oldData?.staffMembers ?? [],
        }),
      );
      utils.office.getOne.setData(
        { id: updatedOffice.id, staff: true },
        (oldData) => ({
          ...updatedOffice,
          // Since we dont mutate staff members, we'll keep the old data
          staffMembers: oldData?.staffMembers ?? [],
        }),
      );
      // If we ever implement pagination, we'll need to check if the data exists first
      utils.office.getAll.setData(undefined, (oldData) =>
        oldData?.map((o) => {
          if (o.id === updatedOffice.id) {
            return { ...updatedOffice, _count: o._count };
          }
          return o;
        }),
      );
      router.back();
    },
  });

  const deleteOffice = api.office.delete.useMutation({
    onSuccess: async () => {
      if (office) {
        // ToDo use queryClient.remove here with fuzzy matching on params
        utils.office.getOne.setData({ id: office.id, staff: true }, undefined);
        utils.office.getOne.setData({ id: office.id, staff: false }, undefined);
        utils.office.getAll.setData(undefined, (oldData) =>
          oldData?.filter((o) => o.id !== office.id),
        );
      }
      await router.push("/");
    },
  });

  const onSubmit = (input: OfficeInput) => {
    if (office) {
      updateOffice.mutate(input);
    } else {
      createOffice.mutate(input);
    }
  };

  const handleDelete = async () => {
    if (office) {
      await modal.show({
        content: (
          <DeleteOffice
            entity="Office"
            handleDelete={async () => {
              await deleteOffice.mutateAsync({ id: office.id });
            }}
          />
        ),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <TextInput
        placeholder="Office Name"
        {...register("name")}
        errorMessage={errors.name?.message}
      />
      <TextInput
        placeholder="Physical Address"
        {...register("address")}
        errorMessage={errors.address?.message}
      />
      <TextInput
        placeholder="Email Address"
        {...register("email")}
        errorMessage={errors.email?.message}
      />
      <TextInput
        placeholder="Phone Number"
        {...register("phone")}
        errorMessage={errors.phone?.message}
      />
      <TextInput
        placeholder="Maximum Capacity"
        {...register("maximumCapacity")}
        type="number"
        errorMessage={errors.maximumCapacity?.message}
      />
      {/* 
      Note: this h3's weight does not 
      match that of the other h3 in the design.
      So we'll override it here. 

      TODO remove global h* styles from tailwind 
      config and explicitly set them in components.
      */}
      <div className="relative">
        <h3 className=" my-6 font-semibold">Office colour</h3>

        <Controller
          control={control}
          name="colour"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <ColourSelector
              onChange={onChange} // send value to hook form
              // onBlur={onBlur} // notify when input is touched/blur
              selected={value}
            />
          )}
        />
        <AnimatePresence>
          {errors.colour?.message && (
            <div className="absolute -bottom-6 left-0">
              <ErrorMessage errorMessage={errors.colour?.message} />
            </div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        <Button
          disabled={createOffice.isPending || updateOffice.isPending}
          type="submit"
        >
          {office ? "Update" : "Add"} Office
        </Button>
        {office && (
          <Button variant="ghost" onClick={handleDelete}>
            Delete Office
          </Button>
        )}
      </div>
    </form>
  );
};

export default EditOffice;
