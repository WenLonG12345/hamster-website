import React from "react";
import { withLayout } from "@moxy/next-layout";
import Admin from ".";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Mimi = () => {
  return (
    <Box>
      <Heading>
      米米
    </Heading>
    <Text>DADSDAD</Text>
    <Button>DASDASDDDAzzzz</Button>
    </Box>
  );
};

export default withLayout(<Admin />)(Mimi);
