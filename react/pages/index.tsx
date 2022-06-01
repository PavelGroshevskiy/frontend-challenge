import React from "react";
import CatsList from "../components/CatsList";
import MainLayout from "../layouts/MainLayout";
import { Grid } from "../node_modules/@mui/material/index";

const Index = ({ cats }) => (
  <MainLayout>
    <Grid sx={{ flexGrow: 1 }} container spacing={3} style={{ marginTop: 0 }}>
      <Grid item xs={12}></Grid>

      <CatsList cats={cats} />
    </Grid>
  </MainLayout>
);

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=12"
  );
  const cats = await response.json();
  console.log(cats);

  return {
    props: { cats },
  };
};

export default Index;
