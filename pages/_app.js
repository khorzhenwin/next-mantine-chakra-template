import "../styles/globals.css";
import Head from "next/head";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { extendTheme, ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
  });
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>AlpacaThings</title>
        <meta property="og:title" content="AlpacaThings" />
        <meta
          property="og:description"
          content="AlpacaThings | A revolution to waste management"
        />
        <meta property="og:image" content="./alpacaverse.png" />
        <link rel="icon" href="./alpacaverse.png" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
          </ChakraProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
