import { useEffect, useMemo, useRef, useState } from "react";
import catService from "../api/catService";
import CatItem from "../components/CatItem";
import { Grid, CircularProgress, Button } from "@mui/material";

const AllCats = () => {
  const [arrCats, setArrCats] = useState([]);
  const [isCatsLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const lastElement = useRef();
  const observer = useRef();

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
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setPage(page + 1);
        console.log("intersect");
        console.log(page);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
    console.log(observer);
  }, [page]);

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
        {/* {isCatsLoading ? (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : null} */}

        {arrCats.map((el) => {
          return <CatItem img={el.url} liked={false} key={el.id}></CatItem>;
        })}
      </Grid>
      <div
        alignItems="center"
        ref={lastElement}
        style={{
          height: 20,
        }}
      >
        <CircularProgress />
      </div>
    </>
  );
};

export default AllCats;
