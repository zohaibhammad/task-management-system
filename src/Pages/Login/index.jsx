import { Button, Container, Form } from "react-bootstrap";
import "./style.scss";
import SnackBar from "Components/SnackBar.jsx";
import { useDispatch } from "react-redux";
import { setUser } from "Redux/Reducer.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `http://localhost:3001/users?username=${event.target[0].value}&password=${event.target[1].value}`
    )
      .then((response) => response.json())
      .then((users) => {
        if (users.length > 0) {
          SnackBar("success", "Login successful");
          dispatch(
            setUser({
              username: users[0]?.username,
              groupId: users[0]?.groupId,
            })
          );
          navigate("/app/tasks");
        } else {
          SnackBar("error", "Please check your username and password");
        }
      })
      .catch((error) => console.error("Error fetching user:", error));
  };

  return (
    <Container>
      <h1 className="mb-3">Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
