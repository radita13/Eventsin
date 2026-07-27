import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Textarea,
} from "@heroui/react";
import { Controller } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect } from "react";
import useUpdateTicketModal from "./useUpdateTicketModal";
import { ITicket } from "@/types/Ticket";

interface PropsTypes {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  refetchTicket: () => void;
  selectedDataTicket: ITicket | null;
  setSelectedDataTicket: Dispatch<SetStateAction<ITicket | null>>;
}

const UpdateTicketModal = (props: PropsTypes) => {
  const {
    isOpen,
    onClose,
    onOpenChange,
    refetchTicket,
    selectedDataTicket,
    setSelectedDataTicket,
  } = props;
  const {
    control,
    errors,
    reset,
    handleSubmitForm,
    handleUpdateTicket,
    isPendingMutateUpdateTicket,
    isSuccessMutateUpdateTicket,
    setValueUpdateTicket,
  } = useUpdateTicketModal(`${selectedDataTicket?._id}`);

  useEffect(() => {
    if (isSuccessMutateUpdateTicket) {
      onClose();
      refetchTicket();
      setSelectedDataTicket(null);
    }
  }, [isSuccessMutateUpdateTicket]);

  useEffect(() => {
    if (selectedDataTicket) {
      setValueUpdateTicket("name", `${selectedDataTicket?.name}`);
      setValueUpdateTicket("price", `${selectedDataTicket?.price}`);
      setValueUpdateTicket("quantity", `${selectedDataTicket?.quantity}`);
      setValueUpdateTicket("description", `${selectedDataTicket?.description}`);
    }
  }, [selectedDataTicket]);

  const handleOnClose = () => {
    reset();
    onClose();
    setSelectedDataTicket(null);
  };

  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
      onClose={handleOnClose}
    >
      <form onSubmit={handleSubmitForm(handleUpdateTicket)}>
        <ModalContent className="m-4">
          <ModalHeader>Add Ticket</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold">Information</p>
              <div className="flex flex-col gap-4">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      autoFocus
                      label="Name"
                      variant="bordered"
                      type="text"
                      isInvalid={errors.name !== undefined}
                      errorMessage={errors.name?.message}
                    />
                  )}
                />
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Price"
                      variant="bordered"
                      type="text"
                      isInvalid={errors.price !== undefined}
                      errorMessage={errors.price?.message}
                    />
                  )}
                />
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Quantity"
                      variant="bordered"
                      type="text"
                      isInvalid={errors.quantity !== undefined}
                      errorMessage={errors.quantity?.message}
                    />
                  )}
                />
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      label="Description"
                      variant="bordered"
                      isInvalid={errors.description !== undefined}
                      errorMessage={errors.description?.message}
                    />
                  )}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onPress={handleOnClose}
              disabled={isPendingMutateUpdateTicket}
            >
              Cancle
            </Button>
            <Button
              color="danger"
              type="submit"
              disabled={isPendingMutateUpdateTicket}
            >
              {isPendingMutateUpdateTicket ? (
                <Spinner color="white" size="sm" />
              ) : (
                "Update Ticket"
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default UpdateTicketModal;
