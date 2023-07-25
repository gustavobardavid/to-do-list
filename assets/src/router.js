const express = require('express');
const tasksController = require('./controllers/tasksController.js');
const tasksmiddleware = require('./midlewares/taskMidleware.js');
const router = express.Router();

router.get('/tasks', tasksController.getALL);

router.post('/tasks', tasksmiddleware.validarCampoTitle,  tasksController.addTask);

router.delete('/tasks/:id', tasksController.deletarTask);

router.put('/tasks/:id', 
    tasksmiddleware.validarCampoLocal,
    tasksmiddleware.validarCampoTitle, 
    tasksController.updateTask
);

module.exports = router;