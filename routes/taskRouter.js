const { Router } = require('express');

const taskRouter = Router();

taskRouter
  .route('/')
  .post(() => {})
  .get((req, res) => {
    res.status(501).send('Not Implemented 008');
  });

taskRouter
  .route('/:taskId')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = taskRouter;
