import { Box, Flex, Image, Text, Spinner, useColorMode } from "@chakra-ui/react";
import { Photo } from "@prisma/client";
import React from "react";

type HamsterPhotoProps = {
  data: Photo;
  onPhotoClick: (data: Photo) => void;
};

const HamsterPhoto: React.FC<HamsterPhotoProps> = ({ data, onPhotoClick }) => {

  const {colorMode} = useColorMode();

  return (
    <Flex
      flexDir='column'
      align='center'
    >
      <Box
        cursor="pointer"
        onClick={() => onPhotoClick(data)}
        // bg="whiteAlpha.200"
        borderRadius="8px"
        p={2}
      >
        <Image
          src={data.url}
          alt={data.id}
          h="200px"
          borderRadius="8px"
          border={colorMode === 'light'? "1px solid #9e9e9e": "1px solid #fff"}
          objectFit="contain"
          fallback={<Spinner />}
          p={1}
        />
      </Box>
      <Text noOfLines={2} m={2}>
        {data.description}
      </Text>
    </Flex>
  );
};

export default HamsterPhoto;
