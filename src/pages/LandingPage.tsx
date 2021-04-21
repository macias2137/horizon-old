import React from "react";
import { Container, Grid, Hidden } from "@material-ui/core";
import ButtonGroupColumn from "../components/ButtonGroupColumn";
import ButtonGroupRow from "../components/ButtonGroupRow";

const LandingPage: React.FC = () => {
  return (
    <section id="landingpage">
      <Container className="wrapper" maxWidth="xl" disableGutters>
        <Grid
          className="wrapper__row"
          xs={12}
          container
          //direction="column"
          //alignItems="center"
          justify="center"
        >
          <Grid
            xs={12}
            className="wrapper__maintext--container"
            container
            justify="center"
            alignItems="flex-end"
          >
            <Grid item>
              <h1 className="wrapper__maintext">你想要的方案这里统统都有</h1>
            </Grid>
          </Grid>
          <Hidden mdUp>
            <ButtonGroupColumn />
          </Hidden>
          <Hidden smDown>
            <ButtonGroupRow />
          </Hidden>
        </Grid>
      </Container>
    </section>
  );
};

export default LandingPage;
