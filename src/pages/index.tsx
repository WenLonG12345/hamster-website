import { Button, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import showUploadWidget from "../utils/upload-widget";

const Home: NextPage = () => {
  return (
    <Container maxW="lg">
      <Button
        onClick={() => {
          showUploadWidget();
        }}
      >
        Click Me
      </Button>
    </Container>
  );
};

export default Home;
