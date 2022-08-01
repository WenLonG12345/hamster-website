import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Icon from "@chakra-ui/icon";
import { Avatar, HStack, AvatarBadge } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const Profile = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={[2, 6]}>
      <ThemeToggle />
      {/* <HStack alignItems="center">
        <Avatar
          name="anubra266"
          src="https://avatars.githubusercontent.com/u/30869823?s=460&u=7fee47eb223768507a386694806007e3a248dad4&v=4"
          size="sm"
        />
        <Icon as={IoIosArrowDown} />
      </HStack> */}
    </Stack>
  );
};

export default Profile;
