import React from "react";
import { Box, Grid } from "@material-ui/core";

interface Props {
  text: string;
  src: string;
  alt: string;
}

const MenuItem: React.FC<Props> = ({ text, src }) => {
  return (
    <Grid item className="menuitem">
      <img className="menuitem__image" src={src} />
      <div className="menuitem__shape">
        <h1 className="menuitem__text">{text}</h1>
      </div>
    </Grid>
  );
};

export default MenuItem;
