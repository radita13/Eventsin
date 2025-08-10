import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface PropsTypes {
  children: ReactNode;
  title: string;
}

const AuthLayout = (props: PropsTypes) => {
  const { children, title } = props;
  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
