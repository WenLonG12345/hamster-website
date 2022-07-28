import { Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW="container.lg" p={3}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
