import Head from "next/head";

interface PropsTypes {
  title?: string;
}

const PageHead = (props: PropsTypes) => {
  const { title = "Event" } = props;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        href="/images/illustrations/logo_icon.svg"
        type="image/x-icon"
      />
      <title>{title}</title>
    </Head>
  );
};

export default PageHead;
