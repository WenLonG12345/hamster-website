import React from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineGlobal } from "react-icons/ai";

type FooterProps = {
  [x: string]: any;
};

const Footer: React.FC<FooterProps> = ({ ...footerProps }) => {
  return (
    <Flex
      py={3}
      px={20}
      backgroundColor={useColorModeValue("blackAlpha.100", "blackAlpha.500")}
      justify={{ base: "center", md: "space-between" }}
      align="center"
      textAlign={{ base: "center", md: "start" }}
      flexDir={{ base: "column", md: "row" }}
      {...footerProps}
    >
      <Text>
        © {new Date().getFullYear()} 仓鼠版权所有
      </Text>

      {/* <Button
        as={Link}
        href="https://www.astro.com.my/"
        isExternal
        width="50px"
        height="50px"
      >
        <AiOutlineGlobal size="20" />
      </Button> */}
    </Flex>
  );
};

export default Footer;
