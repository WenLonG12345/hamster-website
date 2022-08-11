import { Flex, Spacer, Stack } from "@chakra-ui/layout";
import React from "react";
import Actions from "./profile";
import Info from "./info";
import NavButton from "./nav-button";
import { useRouter } from "next/router";
import { Image, useColorModeValue } from "@chakra-ui/react";
import { adminPageRoutes } from "../../../../utils/constants";

const AdminNavBar = () => {
  const router = useRouter();

  const getRoute = () => {
    return adminPageRoutes.find(({ href }) => router.pathname === href)?.name;
  };

  return (
    <Flex
      layerStyle="card"
      h="4.5rem"
      alignItems="center"
      p={5}
      background={useColorModeValue("white", "blackAlpha.300")}
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, 8]}>
        <NavButton />
        <Info display={["none", "flex"]} />

        <Spacer display={{ md: "none" }} />
        {/* <Text
          textStyle="default"
          fontSize="xl"
          fontWeight="semibold"
          fontFamily="cursive"
          display={{ md: "none" }}
        >
          {getRoute()}
        </Text> */}
        <Image src="/logo.png" alt="logo" w="50px" display={['block', 'none']}/>
        <Spacer />
        <Actions />
      </Stack>
    </Flex>
  );
};

export default AdminNavBar;
