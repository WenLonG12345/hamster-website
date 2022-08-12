/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/admin";
import { useHamsterStore } from "../../hooks/useHamsterStore";
import { getAllHamsters } from "../../utils/api";
import { useFetchAxios } from "../../utils/common";

type AdminProps = {
  children?: any;
};

const Admin: React.FC<AdminProps> = ({ children }) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/");
    },
  });

  const allHamster = useFetchAxios(getAllHamsters);
  const hamsterState = useHamsterStore();

  useEffect(() => {
    if (allHamster) {
      hamsterState.addHamsters(allHamster);
    }
  }, [allHamster]);

  if (status === "loading") {
    return (
      <Container maxW='container.lg'>
        <Spinner />
      </Container>
    );
  }

  return <AdminLayout>{children}</AdminLayout>;
};

export default Admin;
