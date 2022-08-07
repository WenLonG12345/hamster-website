import React from "react";
import { withLayout } from "@moxy/next-layout";
import Admin from ".";
import PageHeader from "../../components/layouts/Admin/page-header";
import { Button } from "@chakra-ui/react";

const Mimi = () => {
  return (
    <>
      <PageHeader>
        <PageHeader.Title>米米</PageHeader.Title>
        <PageHeader.Actions>
          <Button>
            TESTTT
          </Button>
        </PageHeader.Actions>
      </PageHeader>
    </>
  );
};

export default withLayout(<Admin />)(Mimi);
