import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@heroui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import useDeleteBannerModal from "./useDeleteBannerModal";

interface PropsTypes {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  refetchBanners: () => void;
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
    refetchBanners,
  } = props;

  const {
    mutateDeleteBanner,
    isPendingMutateDeleteBanner,
    isSuccessMutateDeleteBanner,
  } = useDeleteBannerModal();

  useEffect(() => {
    if (isSuccessMutateDeleteBanner) {
      onClose();
      refetchBanners();
    }
  }, [isSuccessMutateDeleteBanner]);

  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
    >
      <ModalContent className="mt-4">
        <ModalHeader>Delete Banner</ModalHeader>
        <ModalBody>
          <p className="text-medium">
            Are you sure you want to delete this banner?
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
            disabled={isPendingMutateDeleteBanner}
          >
            Cancle
          </Button>
          <Button
            color="danger"
            type="submit"
            disabled={isPendingMutateDeleteBanner}
            onPress={() => mutateDeleteBanner(selectedId)}
          >
            {isPendingMutateDeleteBanner ? (
              <Spinner color="white" size="sm" />
            ) : (
              "Delete Banner"
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCategoryModal;
