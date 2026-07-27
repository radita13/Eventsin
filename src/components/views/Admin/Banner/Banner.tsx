import DataTable from "@/components/ui/DataTable";
import { Chip, useDisclosure } from "@heroui/react";
import Image from "next/image";
import { useCallback, Key, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { COLUMN_LIST_BANNER } from "./Banner.constants";
import useChangeUrl from "@/hooks/useChangeUrl";
import DropdownAction from "@/components/commons/DropdownAction";
import useBanner from "./useBanner";
import AddBannerModal from "./AddBannerModal";
import DeleteBannerModal from "./DeleteBannerModal";

const Banner = () => {
  const { push, isReady, query } = useRouter();
  const {
    dataBanners,
    isLoadingBanners,
    isRefetchingBanners,
    refetchBanners,

    selectedId,
    setSelectedId,
  } = useBanner();

  const { setUrl } = useChangeUrl();

  const addBannerModal = useDisclosure();
  const deleteBannerModal = useDisclosure();

  useEffect(() => {
    if (isReady) {
      setUrl();
    }
  }, [isReady]);

  const renderCell = useCallback(
    (banner: Record<string, unknown>, columnKey: Key) => {
      const cellValue = banner[columnKey as keyof typeof banner];

      switch (columnKey) {
        case "image":
          return (
            <Image
              src={`${cellValue}`}
              alt="image"
              width={300}
              height={100}
              className="rounded-lg"
            />
          );
        case "isShow":
          return (
            <Chip
              color={cellValue ? "success" : "warning"}
              size="sm"
              variant="flat"
            >
              {cellValue === true ? "Published" : "Not Published"}
            </Chip>
          );
        case "actions":
          return (
            <DropdownAction
              onPressButtonDelete={() => {
                setSelectedId(`${banner._id}`);
                deleteBannerModal.onOpen();
              }}
              onPressButtonDetail={() => push(`/admin/banner/${banner._id}`)}
            />
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [push],
  );

  return (
    <section>
      {Object.keys(query).length > 0 && (
        <DataTable
          buttonTopContentLabel="Create Banner"
          columns={COLUMN_LIST_BANNER}
          data={dataBanners?.data || []}
          emptyContent="Banner is empty"
          isLoading={isLoadingBanners || isRefetchingBanners}
          onClickButtonTopContent={addBannerModal.onOpen}
          renderCell={renderCell}
          totalPages={dataBanners?.pagination.totalPages}
        />
      )}

      <AddBannerModal {...addBannerModal} refetchBanners={refetchBanners} />

      <DeleteBannerModal
        {...deleteBannerModal}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        refetchBanners={refetchBanners}
      />
    </section>
  );
};

export default Banner;
