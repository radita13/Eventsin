import {
  LIMIT_BANNER,
  PAGE_DEFAULT,
} from "@/components/constants/list.constants";
import bannerService from "@/services/banner.service";
import categoryService from "@/services/category.service";
import eventService from "@/services/event.service";
import { useQuery } from "@tanstack/react-query";

const useHome = () => {
  const getBanners = async () => {
    let params = `limit=${LIMIT_BANNER}&page=${PAGE_DEFAULT}`;
    const res = await bannerService.getBanners(params);
    const { data } = res;
    return data;
  };

  const { data: dataBanners, isLoading: isLoadingBanners } = useQuery({
    queryKey: ["Banners"],
    queryFn: getBanners,
  });

  const getCategories = async () => {
    let params = `limit=${LIMIT_BANNER}&page=${PAGE_DEFAULT}`;
    const res = await categoryService.getCategories(params);
    const { data } = res;
    return data;
  };

  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
  });

  const getEvents = async (params: string) => {
    const res = await eventService.getEvents(params);
    const { data } = res;
    return data;
  };

  const currentEventQuery = `limit=${LIMIT_BANNER}&page=${PAGE_DEFAULT}&isPublished=true`;

  const { data: dataFeaturedEvents, isLoading: isLoadingFeaturedEvents } =
    useQuery({
      queryKey: ["FeaturedEvents"],
      queryFn: () => getEvents(`${currentEventQuery}&isFeatured=true`),
    });

  const { data: dataLatestEvents, isLoading: isLoadingLatestEvents } = useQuery(
    {
      queryKey: ["LatestEvents"],
      queryFn: () => getEvents(`${currentEventQuery}`),
    },
  );

  return {
    dataBanners,
    isLoadingBanners,
    dataFeaturedEvents,
    isLoadingFeaturedEvents,
    dataLatestEvents,
    isLoadingLatestEvents,
    dataCategories,
    isLoadingCategories,
  };
};

export default useHome;
