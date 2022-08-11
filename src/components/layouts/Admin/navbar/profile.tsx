import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Icon from "@chakra-ui/icon";
import {
  Avatar,
  HStack,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";

const Profile = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={[2, 6]}>
      <ThemeToggle />
      <Menu>
        <MenuButton>
          <Avatar name="Admin" size="sm" bg="purple.500" />
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() =>
              signOut({ redirect: false, callbackUrl: window.location.origin })
            }
          >
            <BiLogOut />
            <Text ml={5}>登出</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default Profile;
