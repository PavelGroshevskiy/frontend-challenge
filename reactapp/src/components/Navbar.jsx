import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";

import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Likes from "../pages/likes";
import AllCats from "../pages/AllCats";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Button>
                <Link to={"/"}>All Cats</Link>
              </Button>
              <Button>
                <Link to={"/likes"}>Likes Cats</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<AllCats />}></Route>
        <Route path="/likes" element={<Likes />}></Route>
      </Routes>
    </>
  );
};
export default Navbar;
