const Task = require('../models/task');
const apq = require('api-query-params');

const createTask =  async (data) => {
    if (data.type === "EMPTY-TASK"){
        let result = await Task.create(data);
        return result
    }
}

const getTask =  async (queryString) => {
    const page = queryString.page
    const {filter, limit, population} = apq(queryString);
    delete filter.page
    
    let offset = (page - 1) * limit

    if (filter.description) {
        filter.description = { $regex: filter.description, $options: 'i' };
    }

    result = await Task.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();
    return result
}

const updateTask =  async (data) => {
    let result = await Task.updateOne({_id: data.id}, {...data})
    return result
}

const deleteTask =  async (id) => {
    let result = await Task.deleteById(id)
    return result
}

module.exports = {
    createTask
    , getTask
    , updateTask
    , deleteTask
}