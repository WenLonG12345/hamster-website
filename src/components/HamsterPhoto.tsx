import {
  Box,
  Flex,
  Image,
  Text,
  Spinner,
  useColorMode,
  VStack,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { Photo } from "@prisma/client";
import React from "react";

type HamsterPhotoProps = {
  data: Photo;
  onPhotoClick: (data: Photo) => void;
};

const HamsterPhoto: React.FC<HamsterPhotoProps> = ({ data, onPhotoClick }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      cursor="pointer"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      flexDir="column"
      align='center'
      justify='center'
      onClick={() => onPhotoClick(data)}
    >
      <Image
        // rounded={"lg"}
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        borderBottomLeftRadius={data.description? 'none': 'lg'}
        borderBottomRightRadius={data.description? 'none': 'lg'}
        objectFit="cover"
        src={data.url || ""}
        alt={"cover"}
      />

      {data.description && (
        <Text
          fontWeight={500}
          noOfLines={2}
          textAlign="center"
          fontSize="14px"
          p={3}
        >
          {data.description}
        </Text>
      )}
    </Flex>
  );
};

export default HamsterPhoto;
