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
import useDeleteEventModal from "./useDeleteEventModal";

interface PropsTypes {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  refetchEvents: () => void;
  selectedId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

const DeleteEventModal = (props: PropsTypes) => {
  const {
    isOpen,
    onClose,
    onOpenChange,
    selectedId,
    setSelectedId,
    refetchEvents,
  } = props;

  const {
    mutateDeleteEvent,
    isPendingMutateDeleteEvent,
    isSuccessMutateDeleteEvent,
  } = useDeleteEventModal();

  useEffect(() => {
    if (isSuccessMutateDeleteEvent) {
      onClose();
      refetchEvents();
    }
  }, [isSuccessMutateDeleteEvent]);

  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
    >
      <ModalContent className="mt-4">
        <ModalHeader>Delete Event</ModalHeader>
        <ModalBody>
          <p className="text-medium">
            Are you sure you want to delete this event?
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
            disabled={isPendingMutateDeleteEvent}
          >
            Cancle
          </Button>
          <Button
            color="danger"
            type="submit"
            disabled={isPendingMutateDeleteEvent}
            onPress={() => mutateDeleteEvent(selectedId)}
          >
            {isPendingMutateDeleteEvent ? (
              <Spinner color="white" size="sm" />
            ) : (
              "Delete Event"
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteEventModal;
