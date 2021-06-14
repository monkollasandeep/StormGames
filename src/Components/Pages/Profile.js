import React from "react";
import {
  Container,
  Card,
  Icon,
  Image,
  Segment,
  Button,
} from "semantic-ui-react";
import profileimg from "../Images/profileimg.jpg";
import { useHistory } from "react-router";

const Profile = (props) => {
  let history = useHistory();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  

  const deleteAccountHandler = () => {
    const r = window.confirm("Are you sure to delete account ? You will no longer Access Account!");
    if (r === true) {
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    props.setisLoggedin(false);
    history.push("/home");
    alert("Account Deletion Successful");
    } else {
      alert(`That's Cool @${name} Play On !!!!`);
    }
  };
  return (
    <Container
      style={{
        backgroundColor: "#c2fff3",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Card centered>
        <Image src={profileimg} wrapped />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{email}</Card.Meta>
          <Card.Description>
            {name} is a gunslinger in storm games
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name="user" />
            10 Wins
          </p>
        </Card.Content>
      </Card>
      <Segment inverted>
        <Button
          inverted
          color="red"
          style={{ marginLeft: "450px" }}
          onClick={deleteAccountHandler}
        >
          Delete Account
        </Button>
      </Segment>
    </Container>
  );
};

export default Profile;
