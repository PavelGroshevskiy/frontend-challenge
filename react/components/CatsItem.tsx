import React, { useState } from "react";
import { ICat } from "../types/cats";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Grid, IconButton } from "../node_modules/@mui/material/index";

interface CatsItemProps {
  catItem: ICat;
}
const localObj = { key: "obj", arr: [] };
// const obj = new Map();

const CatsItem: React.FC<CatsItemProps> = ({ catItem }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Grid key={catItem.id} item style={{ position: "relative" }}>
      <img src={catItem.url} alt="" width={300} height={300} />
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <IconButton
          style={{ background: "#fff" }}
          onClick={() => {
            setLiked(!liked);
            if (!liked) {
              localObj.arr.push(`${catItem.url}`);
              console.log(localObj);
            } else {
              localObj.arr = localObj.arr.filter(
                (el) => el !== `${catItem.url}`
              );
            }
            localStorage.setItem("localObj", JSON.stringify(localObj));
          }}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </Grid>
  );
};

export default CatsItem;
