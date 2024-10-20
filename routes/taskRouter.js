const { Router } = require('express');
const { tasksController } = require('./../controllers');

const taskRouter = Router();

taskRouter
  .route('/')
  .post(tasksController.createTask)
  .get(tasksController.getTasks);

taskRouter
  .route('/:taskId')
  .get(tasksController.getTaskById)
  .patch(tasksController.updateTaskById)
  .put(tasksController.updateOrCreateTaskById, tasksController.createTask)
  .delete(tasksController.deleteTaskById);

module.exports = taskRouter;
