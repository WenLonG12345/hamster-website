import type { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { LayoutTree } from "@moxy/next-layout";
import { store } from "../store";
import AdminLayout from "../components/layouts/Admin";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
      <Provider store={store}>
        <ChakraProvider>
          <LayoutTree
            Component={Component}
            pageProps={pageProps}
            defaultLayout={<AdminLayout />}
          />
          {/* <Component {...pageProps} /> */}
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
