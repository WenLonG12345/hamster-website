import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Stack,
  Flex,
  chakra,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { Hamster } from "@prisma/client";
import React, { MutableRefObject } from "react";
import { MotionBox } from "../../motion-box";

type HamsterLayoutProps = {
  hamsters: Hamster[] | null;
  layoutRef: MutableRefObject<HTMLDivElement | null>;
};

const HamsterLayout: React.FC<HamsterLayoutProps> = ({
  hamsters,
  layoutRef,
}) => {
  const cardBg = useColorModeValue("white", "gray.600");
  const titleColor = useColorModeValue("gray.800", "white");
  const despColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box mt={20} ref={layoutRef}>
      <Heading fontSize={'3xl'}>🐹仓鼠们🐹</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={5}>
        {hamsters?.map((x) => {
          return (
            <Center key={x.id}>
              <MotionBox
                w="xs"
                bg={cardBg}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                whileHover={{ y: -5 }}
                cursor="pointer"
              >
                <Image
                  w="full"
                  h={56}
                  fit="cover"
                  src={x.cover || ""}
                  alt={x.name}
                />

                <Box py={5} textAlign="center">
                  <Text
                    display="block"
                    fontSize="2xl"
                    color={titleColor}
                    fontWeight="bold"
                  >
                    {x.name}
                  </Text>
                  <chakra.span fontSize="sm" color={despColor}>
                    {x.description}
                  </chakra.span>
                </Box>
              </MotionBox>
            </Center>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default HamsterLayout;
