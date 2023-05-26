import React from "react";
import { Header, Footer, Landing } from "../components";
import { Box, Container } from "@chakra-ui/react";
import { useGlobalStore } from "../store";

const Home = () => {
  const [appCredit, alpacaPoints, setAppCredit, setAlpacaPoints] =
    useGlobalStore((state) => [
      state.appCredit,
      state.alpacaPoints,
      state.setAppCredit,
      state.setAlpacaPoints,
    ]);

  return (
    <>
      <Header />
      <Container>
        <Box>
          <Landing appCredit={appCredit} alpacaPoints={alpacaPoints} />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
