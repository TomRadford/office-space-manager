import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import NiceModal from "@ebay/nice-modal-react";
import { inter } from "@/pages/_app";
import { useAppModal } from "@/utils/hooks/modal";

/**
 * Modal wrapper component to be used with our custom `useAppModal` hook.
 *
 * @see useAppModal documentation for more information on how to use this component.
 *
 */
const Modal = NiceModal.create(
  ({
    content,
    closeOnOutsideClick,
  }: {
    content: ReactNode;
    closeOnOutsideClick?: boolean;
  }) => {
    const modal = useAppModal();
    return (
      <>
        <Dialog.Root open={true}>
          <Dialog.Portal container={document.body}>
            <Dialog.Overlay
              onClick={() => {
                if (closeOnOutsideClick) modal.remove();
              }}
              className="font-Sans fixed inset-0 bg-overlay/50 data-[state=open]:animate-overlayShow"
            />
            <Dialog.Content
              onEscapeKeyDown={() => modal.remove()}
              // We need to add the font here since this portals outside of main div in _app.tsx
              className={`font-sans ${inter.variable} fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-lg bg-background px-4 py-6 focus:outline-none  data-[state=open]:animate-contentShow`}
            >
              {content}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    );
  },
);

export default Modal;
