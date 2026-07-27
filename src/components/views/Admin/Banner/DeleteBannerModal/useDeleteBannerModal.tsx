import { toast } from "@/components/ui/Toaster";
import bannerService from "@/services/banner.service";
import { useMutation } from "@tanstack/react-query";

const useDeleteBannerModal = () => {
  const deleteBanner = async (id: string) => {
    const res = await bannerService.deleteBanner(id);
    return res;
  };

  const {
    mutate: mutateDeleteBanner,
    isPending: isPendingMutateDeleteBanner,
    isSuccess: isSuccessMutateDeleteBanner,
  } = useMutation({
    mutationFn: deleteBanner,
    onError: (error) => {
      toast.error("error", error.message);
    },
    onSuccess: () => {
      toast.success("success", "Delete banner successfully");
    },
  });

  return {
    mutateDeleteBanner,
    isPendingMutateDeleteBanner,
    isSuccessMutateDeleteBanner,
  };
};

export default useDeleteBannerModal;
