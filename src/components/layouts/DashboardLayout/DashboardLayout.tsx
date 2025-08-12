import PageHead from "@/components/commons/PageHead";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { useState } from "react";
import { Navbar, NavbarMenuToggle } from "@heroui/react";

interface PropTypes {
  children: React.ReactNode;
  title?: string;
  description?: string;
  type?: string;
}

const DashboardLayout = (props: PropTypes) => {
  const { children, title, description, type = "admin" } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={isOpen}
        />
        <div className="overfloy-y-auto h-screen w-full p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0"
            isBlurred={false}
            classNames={{ wrapper: "p-0" }}
            position="static"
          >
            <h1 className="text-3xl font-bold">{title}</h1>
            <NavbarMenuToggle
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            />
          </Navbar>
          <p className="text-small mb-4">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
