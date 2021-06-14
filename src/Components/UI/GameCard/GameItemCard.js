import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Grid, Segment, Container } from "semantic-ui-react";
import catimage from "./GameImages/cathideandseek.png";
import guessnumberimage from "./GameImages/guessnumberimg.png";
import pokemanimg from './GameImages/pokemanimg.png';
import userapiimg from './GameImages/userapiimg.png';

const GameItemCard = () => {
  return (
    <Segment inverted style={{ padding: "5em 0em" }}>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Card>
                <Image src={catimage} className="ui medium image" wrapped />
                <Card.Content>
                  <Card.Header>Cat Game</Card.Header>
                  <Card.Meta>1 million plays</Card.Meta>
                  <Card.Description>
                    Play Hide and Seek with Cat by switch.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="/games/catplay">
                    <Icon name="play" />
                    Play
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image
                  src={guessnumberimage}
                  className="ui medium image"
                  wrapped
                  centered
                />
                <Card.Content>
                  <Card.Header>Number Guess Game</Card.Header>
                  <Card.Meta>2 million plays</Card.Meta>
                  <Card.Description>
                    Guess The Number As Fast As Possible.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="/games/numberguess">
                    <Icon name="play" />
                    Play
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image
                  src={userapiimg}
                  className="ui medium image"
                  wrapped
                  centered
                />
                <Card.Content>
                  <Card.Header>User Api Game</Card.Header>
                  <Card.Meta>4 million plays</Card.Meta>
                  <Card.Description>Paly Around users Api.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="/games/usersapi">
                    <Icon name="play" />
                    Play
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image
                  src={pokemanimg}
                  className="ui medium image"
                  wrapped
                  centered
                />
                <Card.Content>
                  <Card.Header>Pokeman Api Game</Card.Header>
                  <Card.Meta>6 million plays</Card.Meta>
                  <Card.Description> Pokeman Guess Api.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="/games/pokemanapi">
                    <Icon name="play" />
                    Play
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default GameItemCard;
