import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "../node_modules/@mui/material/index";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <Container>{children}</Container>
  </>
);

export default MainLayout;
