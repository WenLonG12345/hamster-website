import { Avatar, Box, Heading, HStack, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Hamster } from "@prisma/client";
import React from "react";

type HamsterDetailHeaderProps = {
  hamster: Hamster;
};

const HamsterDetailHeader: React.FC<HamsterDetailHeaderProps> = ({
  hamster,
}) => {
  return (
    <Box bg={useColorModeValue('purple.200', 'purple.700')} my={5} borderRadius='8px' p={3}>
      <HStack spacing={5}>
        <Avatar src={hamster.cover || ""} size='xl'/>
        <Stack>
          <Heading fontSize='2xl'>{hamster.name}</Heading>
          <Text>{hamster.description}</Text>
        </Stack>
      </HStack>
    </Box>
  );
};

export default HamsterDetailHeader;
