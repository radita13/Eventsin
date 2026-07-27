import { toast } from "@/components/ui/Toaster";
import bannerService from "@/services/banner.service";
import { IBanner } from "@/types/Banner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useDetailBanner = () => {
  const { query, isReady } = useRouter();

  const getBannerById = async () => {
    const { data } = await bannerService.getBannerById(`${query.id}`);
    return data.data;
  };

  const { data: dataBanner, refetch: refetchBanner } = useQuery({
    queryKey: ["Banner"],
    queryFn: getBannerById,
    enabled: isReady,
  });

  const updateBanner = async (payload: IBanner) => {
    const { data } = await bannerService.updateBanner(`${query.id}`, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdateBanner,
    isPending: isPendingMutateUpdateBanner,
    isSuccess: isSuccessMutateUpdateBanner,
  } = useMutation({
    mutationFn: (payload: IBanner) => updateBanner(payload),
    onError: (error) => {
      toast.error("error", error.message);
    },
    onSuccess: () => {
      refetchBanner();
      toast.success("Success", "Success updated banner");
    },
  });

  const handleUpdateBanner = (data: IBanner) => mutateUpdateBanner(data);

  return {
    dataBanner,
    handleUpdateBanner,
    isPendingMutateUpdateBanner,
    isSuccessMutateUpdateBanner,
  };
};

export default useDetailBanner;
