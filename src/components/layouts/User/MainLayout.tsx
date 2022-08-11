import { Box, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const showHeader = !router.pathname.match("/admin");
  return (
    <>
      {showHeader && <Header />}
      <Container maxW="container.lg" p={3} minH='85vh'>
        {children}
      </Container>
      {showHeader && <Footer />}
    </>
  );
};

export default MainLayout;
