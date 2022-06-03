import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";

import { Link, Route, Routes } from "react-router-dom";
import Likes from "../pages/likes";
import AllCats from "../pages/AllCats";
import NotFound from "../pages/NotFound";

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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
export default Navbar;
