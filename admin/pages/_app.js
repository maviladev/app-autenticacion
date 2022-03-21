import React from "react";

import HtmlHead from "../layout/HtmlHead";
import AppLayout from "../layout/AppLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <HtmlHead />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
