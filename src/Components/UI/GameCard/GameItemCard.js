import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import catimage from './GameImages/cathideandseek.png';
import guessnumberimage from './GameImages/guessnumberimg.png'
import styles from './GameItemCard.module.css';

const GameItemCard = () => {
  return (
    <div className={styles.gamecard}>
    <Card>
      <Image src={catimage} wrapped ui={false} />
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
    <Card>
      <Image src={guessnumberimage} wrapped ui={false} />
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
    </div>
  );
};

export default GameItemCard;
