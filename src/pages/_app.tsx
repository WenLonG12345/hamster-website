import type { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
