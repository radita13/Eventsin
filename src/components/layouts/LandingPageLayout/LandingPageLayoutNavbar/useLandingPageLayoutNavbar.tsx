import {
  DELAY,
  LIMIT_BANNER,
  PAGE_DEFAULT,
} from "@/components/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import authServices from "@/services/auth.service";
import eventService from "@/services/event.service";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const useLandingPageLayoutNavbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const debounce = useDebounce();
  const session = useSession();

  const getProfile = async () => {
    const { data } = await authServices.getProfile();
    return data.data;
  };

  const { data: dataProfile } = useQuery({
    queryKey: ["Profile"],
    queryFn: getProfile,
    enabled: router.isReady && session.status === "authenticated",
  });

  const getEventsSearch = async () => {
    const params = `search=${search}&limit=${LIMIT_BANNER}&page=${PAGE_DEFAULT}&isPublished=true`;
    const res = await eventService.getEvents(params);
    const { data } = res;
    return data;
  };

  const {
    data: dataEventsSearch,
    isLoading: isLoadingEventsSearch,
    isRefetching: isRefecthingEventSearch,
  } = useQuery({
    queryKey: ["EventsSearch"],
    queryFn: getEventsSearch,
    enabled: !!search,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => setSearch(e.target.value), DELAY);
  };

  return {
    dataProfile,

    dataEventsSearch,
    isLoadingEventsSearch,
    isRefecthingEventSearch,
    handleSearch,
    search,
    setSearch,
  };
};

export default useLandingPageLayoutNavbar;
