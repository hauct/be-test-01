const Task = require('../models/task');
const apq = require('api-query-params');

const createTask =  async (data) => {
    if (data.type === "EMPTY-TASK"){
        let result = await Task.create(data);
        return result
    }
}

const getTask =  async () => {
    result = await Task.find({})
    return result
}

module.exports = {
    createTask
    , getTask
}