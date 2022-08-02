import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
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
    <Flex w="full" direction="column" my={3}>
      {getChild("Title")}
      <Stack direction={{ base: "column", xl: "row" }}>
        {getChild("Description")}
        {getChild("Actions")}
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
  return <Text mr="auto" mt={5}>{children}</Text>;
};

const Actions = ({ children }: PageHeaderProps) => {
  return <Flex ml="auto">{children}</Flex>;
};

PageHeader.Title = Title;
PageHeader.Description = Description;
PageHeader.Actions = Actions;
export default PageHeader;
