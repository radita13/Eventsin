import { toast } from "@/components/ui/Toaster";
import eventService from "@/services/event.service";
import { useMutation } from "@tanstack/react-query";

const useDeleteEventModal = () => {
  const deleteEvent = async (id: string) => {
    const res = await eventService.deleteEvent(id);
    return res;
  };

  const {
    mutate: mutateDeleteEvent,
    isPending: isPendingMutateDeleteEvent,
    isSuccess: isSuccessMutateDeleteEvent,
  } = useMutation({
    mutationFn: deleteEvent,
    onError: (error) => {
      toast.error("error", error.message);
    },
    onSuccess: () => {
      toast.success("success", "Delete event successfully");
    },
  });

  return {
    mutateDeleteEvent,
    isPendingMutateDeleteEvent,
    isSuccessMutateDeleteEvent,
  };
};

export default useDeleteEventModal;
