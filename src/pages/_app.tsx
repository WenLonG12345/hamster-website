import type { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { LayoutTree } from "@moxy/next-layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
      <ChakraProvider>
        <LayoutTree Component={Component} pageProps={pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
