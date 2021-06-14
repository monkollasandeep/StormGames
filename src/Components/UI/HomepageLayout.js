import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import stormimage from "./GameCard/GameImages/strom.png";
import { Button, Grid, Header, Icon, Segment } from "semantic-ui-react";

const HomepageLayout = (props) => {
  return (
    <Fragment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header
                as="h1"
                content="Storm Games"
                inverted
                style={{
                  color: "red",
                  fontSize: "4em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: 0,
                }}
              />
              <Header
                as="h2"
                content="Learn! Play! Win!"
                inverted
                style={{
                  color: "red",
                  fontSize: "1.7em",
                  fontWeight: "normal",
                  marginTop: "1.2em",
                }}
              />
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help You To Learn With Fun!
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give your brain superpowers to do things with the games
                that they never thought possible. Let us delight ourselves
                Players and empower our needs... through Storm Games.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Neurons To Charge
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even neurons can be charged through Games.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <img
                src={stormimage}
                className="ui large circular image"
                alt="strom"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Link to={props.isLoggedin ? './games' : './login'}>
                <Button primary size="huge">
                  Let's Play!
                  <Icon name="right arrow" />
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default HomepageLayout;
