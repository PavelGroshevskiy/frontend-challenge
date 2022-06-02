import React, { useEffect, useState } from "react";
import CatsItem from "../../components/CatsItem";

import MainLayout from "../../layouts/MainLayout";
import { Grid } from "../../node_modules/@mui/material/index";

const Index = () => {
  let obj = null;
  try {
    obj = JSON.parse(window.localStorage.getItem("localObj"));
  } catch (e) {
    console.log(e);
  }

  return (
    <MainLayout>
      <Grid container justifyContent="center" spacing={2}>
        {obj?.arr.map((el) => (
          <CatsItem catItem={el} like img={el} />
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Index;
