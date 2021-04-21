import React from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  makeStyles,
  Hidden,
} from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import japanphone from "../images/303ZT-1.png";
import koreaphone from "../images/G2.png";
import BottomMenu from "../components/BottomMenu";

interface Props {
  sectionname: string;
  heading: string;
}
const useStyles = makeStyles({
  root: {
    backgroundColor: "#f2c010",
    color: "#ffffff",
    boxShadow: "0.5rem 0.25rem #2a355e",
  },
  label: { height: "100%", fontSize: "3rem" },
});

const ProductPage: React.FC<Props> = ({ sectionname, heading }) => {
  const classes = useStyles();
  return (
    <section id={sectionname} className="productpage">
      <Container className="productpage__wrapper" maxWidth="xl" disableGutters>
        <Grid
          className="productpage__wrapper--row"
          xs={12}
          container
          direction="row"
        >
          <Grid
            item
            container
            className="productpage__menu--wrapper"
            alignItems="flex-end"
          >
            <Hidden smDown>
              <BottomMenu />
            </Hidden>
          </Grid>
          <Hidden smDown>
            <Grid
              xs={9}
              className={`productpage__section--left ${sectionname}__section--left`}
              container
              direction="column"
            >
              <Grid item>
                <img
                  className={`${sectionname}__phoneimage`}
                  src={sectionname === "japanpage" ? japanphone : koreaphone}
                  alt="phone"
                />
              </Grid>
            </Grid>
          </Hidden>
          <Grid
            xs={12}
            sm={6}
            md={3}
            className="productpage__section--right"
            container
            alignItems="center"
            direction="column"
          >
            <Container className="productpage__text">
              <h1 className="productpage__text--heading">{heading}</h1>
              <h2 className="productpage__text--subtext">
                旅游必备
                <br />
                人气商品
              </h2>
            </Container>
            <Button
              classes={{ root: classes.root, label: classes.label }}
              className="productpage__button"
              variant="contained"
            >
              <p className="productpage__button--text">立即预约</p>
              <PlayCircleFilledIcon
                fontSize="inherit"
                className="productpage__button--icon"
              />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductPage;
