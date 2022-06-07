import { useEffect, useMemo, useState } from "react";
import catService from "../api/catService";
import CatItem from "../components/CatItem";
import { Grid, CircularProgress, Button } from "@mui/material";
import Loader from "../components/UI/Loader/Loader";

const AllCats = () => {
  const [arrCats, setArrCats] = useState([]);
  const [isCatsLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  async function getCats() {
    setLoading(true);
    setTimeout(async () => {
      const response = await catService.getAll(limit, page);
      // const cats = response.data;
      // console.log(...cats);
      setArrCats([...arrCats, ...response.data]);
      setLoading(false);
    });
  }

  useEffect(() => {
    getCats();
  }, [page]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{ marginTop: 20 }}
        spacing={2}
      >
        {isCatsLoading ? (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : null}

        {arrCats.map((el) => {
          // return <img src={el.url} alt="" width={300} height={300} />;
          return <CatItem img={el.url} liked={false} key={el.id}></CatItem>;
          // console.log(el);
        })}
      </Grid>
      <Button
        onClick={() => {
          setPage(page + 1);
          console.log(page + 1);
        }}
      >
        Next
      </Button>
    </>
  );
};

export default AllCats;
