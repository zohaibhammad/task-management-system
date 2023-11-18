import {
  Button,
  Col,
  Container,
  FormCheck,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import React, { useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./style.scss";
import { setTasks } from "Redux/Reducer.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SnackBar from "../../Components/SnackBar.jsx";

const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, tasks } = useSelector((state) => state);

  useEffect(() => {
    user?.groupId && fetchTasks(user?.groupId);
  }, [user]);

  const fetchTasks = (groupId) => {
    fetch(`http://localhost:3001/tasks?groupId=${groupId}`)
      .then((response) => response.json())
      .then((tasks) => dispatch(setTasks(tasks)))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    const updatedList = [...tasks];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    dispatch(setTasks(updatedList));
  };

  const handleCompleted = (e, id) => {
    let tasksClone = [...tasks];
    const taskIndex = tasksClone.findIndex((task) => task?.id === id);
    tasksClone[taskIndex] = {
      ...tasksClone[taskIndex],
      completed: e.target.checked,
    };
    dispatch(setTasks([...tasksClone]));

    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: e.target.checked,
      }),
    })
      .then(() => SnackBar("success", "Task status changed successfully"))
      .catch((error) => console.error("Error changing status:", error));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        SnackBar("success", "Task deleted successfully");
        fetchTasks(user?.groupId);
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Container className="tasks-list">
      <Row className="m-3">
        <Col>
          <h1>Welcome, {user?.username}!</h1>
        </Col>
        <Col className="add-task">
          <Button variant="danger" onClick={(e) => logout()}>
            Logout
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Your Tasks:</h2>
        </Col>
        <Col className="add-task">
          <Link to={"/app/tasks/add"}>
            <Button>Add Task</Button>
          </Link>
        </Col>
      </Row>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <ListGroup
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((item, index) => (
                <Draggable
                  key={item?.id}
                  draggableId={item?.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <ListGroupItem
                      className="item-container"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <Row>
                        <Col xs={3} sm={2} md={2} lg={1} xl={1} xxl={1}>
                          <FormCheck
                            type="checkbox"
                            checked={item?.completed}
                            onChange={(e) => handleCompleted(e, item?.id)}
                          />
                        </Col>
                        <Col xs={9} sm={7} md={7} lg={8} xl={8} xxl={8}>
                          <h4>{item.title}</h4>
                          {item.description}
                        </Col>
                        <Col
                          className="check-col"
                          xs={12}
                          sm={3}
                          md={3}
                          lg={3}
                          xl={3}
                          xxl={3}
                        >
                          <Button
                            variant="danger"
                            onClick={(e) => handleDelete(e, item?.id)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ListGroup>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default TaskList;
