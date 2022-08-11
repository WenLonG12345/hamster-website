import React from "react";
import {
  Box,
  Flex,
  Container,
  HStack,
  useDisclosure,
  IconButton,
  Link,
  Stack,
  Image,
  Text,
  Avatar,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BiUserPin } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type HeaderProps = {
  [x: string]: any;
};

const Header: React.FC<HeaderProps> = ({ ...headerProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const headerTitleColor = useColorModeValue("gray.700", "gray.300");

  let router = useRouter();
  let { asPath } = router;

  const { data: session } = useSession();

  // const headerItem = (
  //   <>
  //     {headerLinks.map((link) => (
  //       <NextLink href={link.route} key={link.title} passHref>
  //         <Link
  //           href={link.route}
  //           px={2}
  //           py={1}
  //           rounded="md"
  //           _hover={{
  //             textDecoration: "none",
  //             bg: "gray.300",
  //             color: "gray.700",
  //           }}
  //           color={link.route === asPath ? "blue" : headerTitleColor}
  //           onClick={isOpen ? onClose : onOpen}
  //         >
  //           <Text fontWeight={"bold"} noOfLines={1} fontSize={"18px"}>
  //             {link.title}
  //           </Text>
  //         </Link>
  //       </NextLink>
  //     ))}
  //   </>
  // );

  return (
    <Box
      sx={{
        position: "-webkit-sticky",
        // position: "sticky" /* Safari */,
        top: "0",
        zIndex: "99",
      }}
      py={2}
      px={10}
      backgroundColor={useColorModeValue("purple.200", "purple.900")}
      backdropFilter="saturate(180%) blur(5px)"
      w="100%"
      pos="fixed"
      {...headerProps}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx="auto"
        maxW={"container.lg"}
        py={5}
      >
        <HStack
          as={Link}
          spacing={4}
          alignItems={"center"}
          href="/"
          _hover={{ textDecoration: "none" }}
        >
          <Image src="/logo.png" alt="logo" w="50px" />
          <Flex direction="column" lineHeight="5">
            <Text fontSize="lg" fontWeight="semibold" textStyle="default">
              可爱仓鼠
            </Text>
            <Text fontSize="sm">精彩你的每一天 ❤️</Text>
          </Flex>
        </HStack>

        {/* LARGE SCREEN */}
        <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
          {/* {headerItem} */}
          <IconButton
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            aria-label={"theme-toggle"}
          />
          <IconButton
            icon={session ? <BiUserPin /> : <RiAdminLine />}
            aria-label="Admin Button"
            onClick={() =>
              session ? router.push("/admin/dashboard") : router.push("/login")
            }
          />
        </HStack>

        {/* BASE SCREEN */}
        <HStack display={{ base: "inherit", md: "none" }} spacing={3}>
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <IconButton
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            aria-label={"theme-toggle"}
          />
          <IconButton
            icon={session ? <BiUserPin /> : <RiAdminLine />}
            aria-label="Admin Button"
            onClick={() =>
              session ? router.push("/admin/dashboard") : router.push("/login")
            }
          />
        </HStack>
      </Flex>

      {/* {isOpen && (
        <Box
          py={4}
          w={["100%", "100%", "80%"]}
          maxW={"container.lg"}
          display={{ base: "inherit", md: "none" }}
        >
          <Stack as={"nav"} spacing={4}>
            {headerItem}
          </Stack>
        </Box>
      )} */}
    </Box>
  );
};

export default Header;
