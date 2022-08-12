import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Photo } from "@prisma/client";
import React from "react";

type HamsterDetailPhotoProps = {
  photo: Photo;
};

const HamsterDetailPhoto: React.FC<HamsterDetailPhotoProps> = ({ photo }) => {
  return (
    <VStack
      cursor="pointer"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pb={photo.description? 3: 0}
    >
      <Image
        // rounded={"lg"}
        borderTopLeftRadius='lg'
        borderTopRightRadius='lg'
        objectFit="cover"
        src={photo.url || ""}
        alt={"cover"}
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        flex={1}
      >
        <Text fontWeight={500}>
          {photo.description}
        </Text>
      </Flex>
    </VStack>
  );
};

export default HamsterDetailPhoto;
