import { useEffect, useState } from "react";
import catService from "../api/catService";
import CatItem from "../components/CatItem";
import { Grid } from "@mui/material";

const AllCats = () => {
  const [arrCats, setArrCats] = useState([]);

  async function getCats() {
    const response = await catService.getAll();
    setArrCats(response.data);
  }

  useEffect(() => {
    getCats();
  }, []);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {arrCats.map((el) => {
        // return <img src={el.url} alt="" width={300} height={300} />;
        return <CatItem img={el.url} liked={false} key={el.id}></CatItem>;
        // console.log(el);
      })}
    </Grid>
  );
};

export default AllCats;
