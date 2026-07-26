import { toast } from "@/components/ui/Toaster";
import ticketService from "@/services/ticket.service";
import { useMutation } from "@tanstack/react-query";

const useDeleteTicketModal = () => {
  const deleteTicket = async (id: string) => {
    const res = await ticketService.deleteTicket(id);
    return res;
  };

  const {
    mutate: mutateDeleteTicket,
    isPending: isPendingMutateDeleteTicket,
    isSuccess: isSuccessMutateDeleteTicket,
  } = useMutation({
    mutationFn: deleteTicket,
    onError: (error) => {
      toast.error("error", error.message);
    },
    onSuccess: () => {
      toast.success("success", "Delete ticket successfully");
    },
  });

  return {
    mutateDeleteTicket,
    isPendingMutateDeleteTicket,
    isSuccessMutateDeleteTicket,
  };
};

export default useDeleteTicketModal;
