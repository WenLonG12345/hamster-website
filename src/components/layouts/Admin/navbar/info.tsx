import { Flex, Stack, StackProps, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Info = (props: StackProps) => {
  const router = useRouter();

  return (
    <Stack
      direction="row"
      alignItems="center"
      {...props}
      onClick={() => router.push("/")}
      cursor="pointer"
    >
      <Image src="/logo.png" alt="logo" w="40px" />
      <Flex direction="column" lineHeight="5">
        <Text fontSize="lg" fontWeight="semibold" textStyle="default">
          可爱仓鼠
        </Text>
        <Text fontSize="sm">仓鼠管理界面</Text>
      </Flex>
    </Stack>
  );
};

export default Info;
