import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
