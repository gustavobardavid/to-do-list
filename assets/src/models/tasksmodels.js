const connection = require('./connection.js');

const getALL = async () => {
    const [ tasks ] = await connection.execute('SELECT * FROM TASKS');
    return tasks; 
};

const addTask = async (tasks) => {
   
    const { title, local } = tasks;

    //const dataUTC = new Date(data).toUTCString();

    const data = new Date();

    const querry = 'INSERT INTO TASKS (title, local, data) VALUES(?, ?, ?)';

    const  [ createdTask ] = await connection.execute(querry, [title, local, data]);

    return { insertedID:  createdTask.insertId };
};

const deletarTask = async (id) => {
    const removerTask = await connection.execute('DELETE FROM TASKS WHERE id = ? ' , [id]);
    return removerTask;  
}

const updateTask = async (id, task) => {
    const {title, local} = task;

    const [ updateTask ]  = await connection.execute('UPDATE TASKS SET title = ?, local = ? WHERE id = ?' , [title, local, id]);
    
    return updateTask;  
}
 

module.exports = {
    getALL,
    addTask,
    deletarTask,
    updateTask
};