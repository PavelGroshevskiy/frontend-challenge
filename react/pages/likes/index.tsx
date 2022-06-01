import React from "react";
import CatsItem from "../../components/CatsItem";
import CatsList from "../../components/CatsList";
import MainLayout from "../../layouts/MainLayout";
import { Grid } from "../../node_modules/@mui/material/index";

const Index = () => {
  const obj = JSON.parse(localStorage.getItem("localObj"));

  return (
    <MainLayout>
      <Grid container justifyContent="center" spacing={2}>
        {obj.arr.map((cat) => (
          <CatsItem catItem={cat} key={cat.id} />
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Index;
