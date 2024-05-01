import Button from "@/components/common/button/Button";
import BackIcon from "@/components/common/icons/BackIcon";
import IconWrapper from "@/components/common/icons/IconWrapper";
import { useAppModal } from "@/utils/hooks/modal";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const Delete = ({
  handleDelete,
  entity,
}: {
  handleDelete: () => Promise<void>;
  entity: string;
}) => {
  const modal = useAppModal();
  const onDelete = async () => {
    await handleDelete();
    modal.remove();
  };

  return (
    <div className="flex flex-col gap-8">
      <DialogTitle className="flex items-start gap-3">
        <IconWrapper
          IconComponent={BackIcon}
          onClick={() => modal.remove()}
        ></IconWrapper>
        <p className="text-xl font-bold">
          Are you sure you want to delete this {entity}?
        </p>
      </DialogTitle>
      <DialogDescription className="flex flex-col gap-3">
        <Button variant="red" onClick={onDelete}>
          Delete {entity}
        </Button>
        <Button onClick={() => modal.remove()} variant="ghost">
          Keep {entity}
        </Button>
      </DialogDescription>
    </div>
  );
};

export default Delete;
