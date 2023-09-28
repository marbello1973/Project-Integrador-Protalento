interface TaskInter {
  id: string;
  nameTask: string;
  description: string;
  category: string;
  completed: TaskBool;
}

interface TaskBool {
  completed: boolean;
}

export { TaskBool, TaskInter };
