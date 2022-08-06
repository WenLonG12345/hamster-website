import { Flex, Spacer, Stack, Text, Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

type PageHeaderProps = { children: ReactNode };
type PageHeader = {
  Title: typeof Title;
  Description: typeof Description;
  Actions: typeof Actions;
};

const PageHeader: React.FC<PageHeaderProps> & PageHeader = ({ children }) => {
  const getChild = (type: string) =>
    React.Children.map(
      children,
      (child: any) => child.type.name === type && child
    );
  return (
    <Flex w="full" direction="column" my={3} px={10}>
      <Flex justify='space-between'>
        {getChild("Title")}
        {getChild("Actions")}
      </Flex>
      <Stack direction={{ base: "column", xl: "row" }}>
        {getChild("Description")}
      </Stack>
    </Flex>
  );
};

const Title = ({ children }: PageHeaderProps) => {
  return (
    <Text textStyle="default" fontSize="2xl" fontWeight="semibold">
      {children}
    </Text>
  );
};

const Description = ({ children }: PageHeaderProps) => {
  return (
    <Box mt={5} w="100%">
      {children}
    </Box>
  );
};

const Actions = ({ children }: PageHeaderProps) => {
  return <Box>{children}</Box>;
};

PageHeader.Title = Title;
PageHeader.Description = Description;
PageHeader.Actions = Actions;
export default PageHeader;
