import React from "react";
import MenuItem from "./MenuItem";
import { Grid } from "@material-ui/core";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import icon6 from "../images/icon6.png";
import icon7 from "../images/icon7.png";

const BottomMenu: React.FC = () => {
  return (
    <Grid
      className="bottommmenu"
      xs={12}
      container
      direction="row"
      justify="space-evenly"
      wrap="nowrap"
    >
      <MenuItem text="日本" src={icon1} alt="日本" />
      <MenuItem text="韩国" src={icon2} alt="韩国" />
      <MenuItem text="东亚" src={icon3} alt="东亚" />
      <MenuItem text="北美" src={icon4} alt="北美" />
      <MenuItem text="东南亚" src={icon5} alt="东南亚" />
      <MenuItem text="欧洲" src={icon6} alt="欧洲" />
      <MenuItem text="其他" src={icon7} alt="其他" />
    </Grid>
  );
};

export default BottomMenu;
