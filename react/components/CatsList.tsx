import React from "react";
import { Grid, IconButton } from "../node_modules/@mui/material/index";
import { ICat } from "../types/cats";

import CatsItem from "./CatsItem";

interface CatsList {
  cats: ICat[];
}

const CatsList: React.FC<CatsList> = ({ cats }) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {cats.map((cat) => (
        <CatsItem catItem={cat} key={cat.id} />
      ))}
    </Grid>
  );
};

export default CatsList;
