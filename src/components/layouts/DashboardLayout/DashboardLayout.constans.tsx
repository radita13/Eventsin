import {
  IoBookmarkOutline,
  IoGridOutline,
  IoListOutline,
  IoPricetagsOutline,
  IoWalletOutline,
} from "react-icons/io5";

const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <IoGridOutline />,
  },
  {
    key: "event",
    label: "Event",
    href: "/admin/event",
    icon: <IoListOutline />,
  },
  {
    key: "category",
    label: "Category",
    href: "/admin/category",
    icon: <IoPricetagsOutline />,
  },
  {
    key: "banner",
    label: "Banner",
    href: "/admin/banner",
    icon: <IoBookmarkOutline />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/admin/transaction",
    icon: <IoWalletOutline />,
  },
];

const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member",
    icon: <IoGridOutline />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/member/transaction",
    icon: <IoWalletOutline />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };
