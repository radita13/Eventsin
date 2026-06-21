import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@heroui/react";
import useDeleteCategoryModal from "./useDeleteCategoryModal";
import { Dispatch, SetStateAction, useEffect } from "react";

interface PropsTypes {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  refetchCategory: () => void;
  selectedId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

const DeleteCategoryModal = (props: PropsTypes) => {
  const {
    isOpen,
    onClose,
    onOpenChange,
    selectedId,
    setSelectedId,
    refetchCategory,
  } = props;

  const {
    mutateDeleteCategory,
    isPendingMutateDeleteCategory,
    isSuccessMutateDeleteCategory,
  } = useDeleteCategoryModal();

  useEffect(() => {
    if (isSuccessMutateDeleteCategory) {
      onClose();
      refetchCategory();
    }
  }, [isSuccessMutateDeleteCategory]);

  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
    >
      <ModalContent className="mt-4">
        <ModalHeader>Delete Category</ModalHeader>
        <ModalBody>
          <p className="text-medium">
            Are you sure you want to delete this category?
          </p>
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            variant="flat"
            onPress={() => {
              onClose();
              setSelectedId("");
            }}
            disabled={isPendingMutateDeleteCategory}
          >
            Cancle
          </Button>
          <Button
            color="danger"
            type="submit"
            disabled={isPendingMutateDeleteCategory}
            onPress={() => mutateDeleteCategory(selectedId)}
          >
            {isPendingMutateDeleteCategory ? (
              <Spinner color="white" size="sm" />
            ) : (
              "Delete Category"
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCategoryModal;
