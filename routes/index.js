const { Router } = require('express');
const usersRouter = require('./usersRouter');
const taskRouter = require('./taskRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/tasks', taskRouter);

router.get('/', (req, res, next) => {
  res.status(501).send('Not Implemented');
});

module.exports = router;
