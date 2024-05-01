import Modal from "@/components/common/Modal";
import { useModal as useNiceModal } from "@ebay/nice-modal-react";
/**
 * Hook used to render the application's modal ✨
 *
 * Note: Modal content should be treated as separate to the 'parent'
 * caller component (ie: the component that ran `myModal.show()`)
 * since this modal is not subscribed to the caller component's state
 *
 * @example
 * ```tsx
 * const myModal = useAppModal();
 *
 * const openModal = async () => {
 *   await myModal.show(<MyComponent />);
 * }
 * ```
 *
 *  Content component should use Radix's semantic Dialog components
 *
 *  @example content component's structure:
 * ```tsx
 *    //MyComponent.tsx
 *    <>
 *     <Dialog.Title>Title</Dialog.Title>
 *      <Dialog.Close>Close</Dialog.Close>
 *      <Dialog.Description>Description</Dialog.Description>
 *    </>
 * ```
 */
export const useAppModal = () => useNiceModal(Modal);
