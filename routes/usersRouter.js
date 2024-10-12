const { Router } = require('express');

const usersRouter = Router();

usersRouter
  .route('/')
  .post(() => {})
  .get((req, res) => {
    res.status(501).send('Not Implemented 007');
  });

usersRouter
  .route('/:userId')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = usersRouter;
