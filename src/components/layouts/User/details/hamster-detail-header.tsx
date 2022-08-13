import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Hamster } from "@prisma/client";
import React from "react";
import { AiFillEdit } from "react-icons/ai";

type HamsterDetailHeaderProps = {
  hamster: Hamster | undefined;
  isAdmin?: boolean;
  setEdit?: (data: Hamster | undefined) => void;
};

const HamsterDetailHeader: React.FC<HamsterDetailHeaderProps> = ({
  hamster,
  isAdmin = false,
  setEdit,
}) => {
  const boxColor = useColorModeValue("purple.200", "purple.700");

  if (!hamster) return null;

  return (
    <Box bg={boxColor} my={5} borderRadius="8px" p={3}>
      <Flex justify="space-between" align="center">
        <HStack spacing={5}>
          <Avatar src={hamster.cover || ""} size="xl" />
          <Stack>
            <Heading fontSize="2xl">{hamster.name}</Heading>
            <Text>{hamster.description}</Text>
          </Stack>
        </HStack>

        {isAdmin && (
          <IconButton
            icon={<AiFillEdit />}
            aria-label="edit"
            onClick={() => setEdit && setEdit(hamster)}
          />
        )}
      </Flex>
    </Box>
  );
};

export default HamsterDetailHeader;
