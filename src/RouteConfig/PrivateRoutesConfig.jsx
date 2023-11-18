import { TaskList, AddTask } from "Pages";

const PrivateRoutes = [
  {
    component: <TaskList />,
    path: "tasks",
  },
  {
    component: <AddTask />,
    path: "tasks/add",
  },
];

export default PrivateRoutes;
