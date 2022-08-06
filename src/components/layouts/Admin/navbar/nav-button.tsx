import { Box, Icon, IconButton, Stack, StackProps, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import {RiMenuFoldFill, RiMenuUnfoldFill} from 'react-icons/ri';
import { NavContext } from "..";

const NavButton = (props: StackProps) => {
  const { onToggle, isOpen } = useContext(NavContext);
  const icon = isOpen ? RiMenuUnfoldFill : RiMenuFoldFill;
  return (
    <IconButton
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      onClick={onToggle}
    />
  );
};

export default NavButton;
