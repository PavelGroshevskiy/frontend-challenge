import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// const localObj = { key: "obj", arr: [] };

const CatItem = ({ like, img }) => {
  const [liked, setLiked] = useState(like);

  return (
    <Grid key={img} item style={{ position: "relative" }}>
      <img src={img} alt="" width={300} height={300} />
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
          }}
          //   if (!liked) {
          //     localObj.arr.push(`${img}`);
          //     console.log(localObj);
          //   }
          //   if (liked) {
          //     localObj.arr = localObj.arr.filter((el) => el !== `${img}`);
          //     console.log("unlike");
          //   }
          //   localStorage.setItem("localObj", JSON.stringify(localObj));
          // }}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </Grid>
  );
};

export default CatItem;
