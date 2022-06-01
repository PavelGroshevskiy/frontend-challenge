import * as React from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
} from "../node_modules/@mui/material/index";
import { useRouter } from "../node_modules/next/router";

const pages = [
  { text: "All Cats", href: "/" },
  { text: "likes cats", href: "/likes" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button
                onClick={() => {
                  router.push(page.href);
                }}
                key={page.text}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
