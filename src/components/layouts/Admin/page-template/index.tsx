import { Flex, Stack, Text, Box } from "@chakra-ui/react";
import React from "react";

type PageTemplateProps = {
  title: string;
  actions: React.ReactNode;
  content: React.ReactNode;
};

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  actions,
  content,
}) => {
  return (
    <Flex w="full" direction="column" my="3" px="10">
      <Flex justify="space-between">
        <Text fontSize="2xl" fontWeight="semibold">
          {title}
        </Text>
        <Box>{actions}</Box>
      </Flex>
      <Stack direction={{ base: "column", xl: "row" }}>
        <Box mt={5} w="100%">
          {content}
        </Box>
      </Stack>
    </Flex>
  );
};

export default PageTemplate;
