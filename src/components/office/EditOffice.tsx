import Button from "@/components/common/button/Button";
import TextInput from "@/components/common/input/TextInput";
import ColourSelector from "@/components/office/ColourSelector";
import { officeInputSchema } from "@/inputSchema/office";
import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm } from "react-hook-form";
import type z from "zod";

type OfficeInput = z.infer<typeof officeInputSchema>;

/**
 * Office edit/add component
 */
const EditOffice = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OfficeInput>({
    resolver: zodResolver(officeInputSchema),
  });

  const onSubmit = (data: OfficeInput) => {
    console.log(data);
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
      <h3 className=" mt-41 font-semibold">Office colour</h3>
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
      <div className="mt-3">
        <Button type="submit">Add Office</Button>
      </div>
    </form>
  );
};

export default EditOffice;
