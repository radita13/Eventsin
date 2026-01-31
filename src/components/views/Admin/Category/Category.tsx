import DataTable from "@/components/ui/DataTable";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Image from "next/image";
import { useCallback, Key, ReactNode } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useRouter } from "next/router";
import { COLUMN_LIST_CATEGORY } from "./Category.constants";

const Category = () => {
  const { push } = useRouter();
  const renderCell = useCallback(
    (category: Record<string, unknown>, columnKey: Key) => {
      const cellValue = category[columnKey as keyof typeof category];

      switch (columnKey) {
        case "icon":
          return (
            <Image src={`${cellValue}`} alt="icon" width={100} height={100} />
          );
        case "actions":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <CiMenuKebab className="text-default-700" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key="detail-category-button"
                  onPress={() => push(`/admin/category/${category._id}`)}
                >
                  Detail Category
                </DropdownItem>
                <DropdownItem
                  key="delete-category-button"
                  className="text-danger-500"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [push],
  );

  return (
    <section>
      <DataTable
        renderCell={renderCell}
        columns={COLUMN_LIST_CATEGORY}
        data={[
          {
            _id: "1",
            name: "Category 1",
            description: "Description 1",
            icon: "/images/general/logo.svg",
          },
          {
            _id: "2",
            name: "Category 2",
            description: "Description 2",
            icon: "/images/general/logo.svg",
          },
          {
            _id: "3",
            name: "Category 3",
            description: "Description 3",
            icon: "/images/general/logo.svg",
          },
          {
            _id: "4",
            name: "Category 4",
            description: "Description 4",
            icon: "/images/general/logo.svg",
          },
          {
            _id: "5",
            name: "Category 5",
            description: "Description 5",
            icon: "/images/general/logo.svg",
          },
        ]}
      />
    </section>
  );
};

export default Category;
