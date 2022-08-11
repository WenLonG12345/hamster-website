import type { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { LayoutTree } from "@moxy/next-layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
      <ChakraProvider>
        <SessionProvider session={session}>
          <LayoutTree Component={Component} pageProps={pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
