const _ = require('lodash');
const createHttpError = require('http-errors');
const { Task } = require('./../models');

// Створення нового завдання
module.exports.createTask = async (req, res, next) => {
  const { body } = req;

  try {
    const createdTask = await Task.create(body);
    const preparedTask = _.omit(createdTask.get(), ['createdAt', 'updatedAt']);

    res.status(201).send({ data: preparedTask });
  } catch (error) {
    next(error);
  }
};

// Отримання всіх завдань з можливістю пагінації
module.exports.getTasks = async (req, res, next) => {
  const {
    query: { page = 1, results = 10 },
  } = req;

  const limit = results;
  const offset = (page - 1) * results;

  try {
    const foundTasks = await Task.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
      raw: true,
    });
    res.status(200).send({ data: foundTasks });
  } catch (err) {
    next(err);
  }
};

// Отримання завдання за ID
module.exports.getTaskById = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;

  try {
    const foundTask = await Task.findByPk(taskId, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      raw: true,
    });
    if (!foundTask) {
      return next(createHttpError(404, 'Task Not Found'));
    }

    res.status(200).send({ data: foundTask });
  } catch (error) {
    next(error);
  }
};

// Оновлення завдання за ID
module.exports.updateTaskById = async (req, res, next) => {
  const {
    params: { taskId },
    body,
  } = req;

  try {
    const [, [updatedTask]] = await Task.update(body, {
      where: { id: taskId },
      raw: true,
      returning: true,
    });

    if (!updatedTask) {
      return next(createHttpError(404, 'Task Not Found'));
    }

    res.status(200).send({ data: updatedTask });
  } catch (err) {
    next(err);
  }
};

// Оновлення або створення завдання за ID
module.exports.updateOrCreateTaskById = async (req, res, next) => {
  const {
    body,
    params: { taskId },
  } = req;

  try {
    const [, [updatedTask]] = await Task.update(body, {
      where: { id: taskId },
      raw: true,
      returning: true,
    });

    if (!updatedTask) {
      body.id = taskId;
      return next();
    }

    res.status(200).send({ data: updatedTask });
  } catch (error) {
    next(error);
  }
};

// Видалення завдання за ID
module.exports.deleteTaskById = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;

  try {
    const deletedCount = await Task.destroy({
      where: { id: taskId },
    });

    if (deletedCount === 0) {
      return next(createHttpError(404, 'Task Not Found'));
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
