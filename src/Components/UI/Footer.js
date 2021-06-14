import React from "react";
import { List, Grid, Container, Segment, Header } from "semantic-ui-react";

function Footer() {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Storm Games" />
                <List link inverted>
                  <List.Item>Events</List.Item>
                  <List.Item>Services</List.Item>
                  <List.Item>Contests</List.Item>
                  <List.Item>Workshops</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={4}>
                <Header inverted as="h4" content="Contact Us" />
                <List link inverted>
                  <List.Item>Phone no : 123456780</List.Item>
                  <List.Item>Email    : stormgames@stackavenue.com</List.Item>
                  <List.Item>Location : Pune</List.Item>
                  <List.Item>Sponser  : <a href='https://stack-avenue.com/'>StackAvenue</a></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="About" />
                <p>OpenSource Project </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;