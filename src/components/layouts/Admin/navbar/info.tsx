import { Flex, Stack, StackProps, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

const Info = (props: StackProps) => {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <Image src="/logo.png" alt="logo" w="50px" />
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
