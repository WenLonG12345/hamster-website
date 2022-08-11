import {
  HStack,
  Image,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";

const IMAGE =
  "https://res.cloudinary.com/teo1996/image/upload/v1659765956/hamsters/dpmitlg9ymv6epcajl5i.jpg";

type DashbpardHamsterCardProps = {
  name: string;
  href: string;
};

const DashboardHamsterCard: React.FC<DashbpardHamsterCardProps> = ({
  name,
  href,
}) => {
  const router = useRouter();
  return (
    <VStack
      cursor="pointer"
      onClick={() => router.push(href)}
      p={3}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
    >
      <Image rounded={"lg"} objectFit="cover" src={IMAGE} alt={"cover"} />
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        flex={1}
      >
        <Heading
          fontSize='xl'
          fontWeight={500}
        >
          {name}
        </Heading>
      </Flex>
    </VStack>
  );
};

export default DashboardHamsterCard;
