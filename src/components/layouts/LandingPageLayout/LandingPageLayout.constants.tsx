import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/event" },
];

const BUTTON_ITEMS = [
  { label: "Register", href: "/auth/register", variant: "bordered" },
  { label: "Login", href: "/auth/login", variant: "solid" },
];

const SOCIAL_ITEMS = [
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram />,
  },
  {
    label: "Linkedin",
    href: "#",
    icon: <FaLinkedin />,
  },
  {
    label: "Tiktok",
    href: "#",
    icon: <FaTiktok />,
  },
];

export { NAV_ITEMS, BUTTON_ITEMS, SOCIAL_ITEMS };
