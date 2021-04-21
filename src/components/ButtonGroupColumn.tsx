import React from "react";
import { Button, Grid } from "@material-ui/core";

const ButtonGroupColumn: React.FC = () => (
  <Grid className="button__group" container xs={12} direction="column">
    <Button className="button button--cup" variant="contained">
      <h3 className="button__text">里统统</h3>
    </Button>
    <Button className="button button--tower" variant="contained">
      <h3 className="button__text">里统WiFi统想</h3>
    </Button>
    <Button className="button button--glasses" variant="contained">
      <h3 className="button__text">里统统</h3>
    </Button>
  </Grid>
);

export default ButtonGroupColumn;
