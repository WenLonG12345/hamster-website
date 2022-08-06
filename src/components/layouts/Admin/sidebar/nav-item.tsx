import Icon from "@chakra-ui/icon";
import {
  BoxProps,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { chakra, useColorModeValue as mode } from "@chakra-ui/system";
import React from "react";
import { IconType } from "react-icons";
import NextLink from "next/link";

export type NavItem = {
  icon: IconType;
  active?: boolean;
  count?: number;
  href?: string;
  name: string;
};
const NavItem = (props: NavItem) => {
  const activeColor = mode("black", "white");
  const activeProps: BoxProps = {
    color: activeColor,
    borderRightColor: props.active ? 'purple.500' : 'transparent',
    bg: mode("purple.200", 'purple.700'),
  };

  return (
    <LinkBox>
      <Stack
        direction="row"
        cursor="pointer"
        px={8}
        py={4}
        spacing={4}
        alignItems="center"
        fontWeight="semibold"
        transition="all .4s ease-in-out"
        borderRightWidth="3px"
        borderRightColor="transparent"
        _hover={activeProps}
        {...(props.active && activeProps)}
      >
        <Icon as={props.icon} fontSize="xl" />
        <NextLink href={props.href || ""} passHref>
          <LinkOverlay>
            <Text>{props.name}</Text>
          </LinkOverlay>
        </NextLink>
        <Spacer />
        {props.count && (
          <chakra.span
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="pink.50"
            bg="pink.500"
            rounded="full"
          >
            {props.count}
          </chakra.span>
        )}
      </Stack>
    </LinkBox>
  );
};

export default NavItem;
