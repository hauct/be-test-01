const {createTask
    , getTask
    , updateTask
    , deleteTask} = require('../services/TaskService')

const postCreateTask = async (req, res) => {
    let result = await createTask(req.body);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

const getGetTask = async (req, res) => {
    let result = await getTask(req.query);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

const putUpdateTask = async (req, res) => {
    let result = await updateTask(req.body);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

const deleteDeleteTask = async (req, res) => {
    let result = await deleteTask(req.body.id);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

module.exports = {
    postCreateTask
    , getGetTask
    , putUpdateTask
    , deleteDeleteTask
}