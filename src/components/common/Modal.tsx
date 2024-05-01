import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import NiceModal from "@ebay/nice-modal-react";
import { inter } from "@/pages/_app";
import { useAppModal } from "@/utils/hooks/modal";

/**
 * Modal wrapper component to be used with our custom `useAppModal` hook.
 *
 *
 */
const Modal = NiceModal.create(({ content }: { content: ReactNode }) => {
  const modal = useAppModal();
  return (
    <>
      <Dialog.Root open={true}>
        <Dialog.Portal container={document.body}>
          <Dialog.Overlay className="font-Sans data-[state=open]:animate-overlayShow bg-overlay/50 fixed inset-0" />
          <Dialog.Content
            onEscapeKeyDown={() => modal.remove()}
            className={`font-sans ${inter.variable} data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white px-4 py-6  focus:outline-none`}
          >
            {content}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
});

export default Modal;
