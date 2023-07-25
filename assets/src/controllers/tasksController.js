const tasksModels = require('../models/tasksModels.js');

const getALL = async (req, res) => {
    
    const tasks = await tasksModels.getALL();

    return res.status(200).json(tasks);
};

const addTask = async (req, res ) => {
   
    const createdTask = await tasksModels.addTasks(req.body);
    
    return res.status(201).json(createdTask);
};

const deletarTask = async (req, res ) => {
    const { id } =  req.params;

    await tasksModels.deletarTask(id);

    return res.status(204).json({message: 'excluido'});
};

const updateTask = async (req, res) => {
    const { id } =  req.params;

    await tasksModels.updateTask(id, req.body);

    return res.status(204).json('');
}

module.exports = {
     getALL,
     addTask,
     deletarTask,
     updateTask
}