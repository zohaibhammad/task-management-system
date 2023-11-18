import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import SnackBar from "../../Components/SnackBar.jsx";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target[0].value,
        description: e.target[1].value,
        groupId: user?.groupId,
        completed: false,
      }),
    })
      .then(() => {
        SnackBar("success", "Task Added Successfully");
        navigate("/app/tasks", { replace: true });
      })
      .catch((error) => console.error("Error creating task:", error));
  };

  return (
    <Container className="add-task">
      <h1 className="m-3">Add New Task</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddTask;
