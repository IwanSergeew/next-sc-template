import React, { ReactElement } from "react";
import Head from "next/head";
import { GlobalContext } from "../useGlobalContext";
import { Footer, LayoutMain } from "../../styles/Layout";
import GlobalStyle from "../../styles/GlobalStyle";

type Props = {
  children?: any;
  title?: string;
};

export default ({
  children,
  title = "This is the default title",
}: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalContext.Provider value={{}}>
        <LayoutMain>
          <GlobalStyle />
          {children}
        </LayoutMain>
        <Footer>footer</Footer>
      </GlobalContext.Provider>
    </>
  );
};

