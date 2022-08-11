import {
  HStack,
  Image,
  Flex,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const IMAGE =
  "https://res.cloudinary.com/teo1996/image/upload/v1659765956/hamsters/dpmitlg9ymv6epcajl5i.jpg";

const DashboardCoverCard = () => {
  const router = useRouter();
  return (
    <Center>
      <HStack
        cursor="pointer"
        onClick={() => router.push("/admin/cover")}
        p={6}
        w={"full"}
        maxW={{ base: "80vw", md: "50vw" }}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"2xl"}
        rounded={"lg"}
      >
        <Image
          rounded={"lg"}
          height={{ base: 150, md: 230 }}
          width={280}
          maxW={{ base: "100px", sm: "200px", md: "300px" }}
          objectFit="cover"
          src={IMAGE}
          alt={"cover"}
        />
        <Flex
          pl={{ base: 0, md: 10 }}
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          flex={1}
        >
          <Heading fontSize={"3xl"} fontFamily={"body"} fontWeight={500}>
            封面
          </Heading>
          <Text color={"gray.500"} fontSize={"sm"} pt={3}>
            编辑您的主页封面
          </Text>
        </Flex>
      </HStack>
    </Center>
  );
};

export default DashboardCoverCard;
