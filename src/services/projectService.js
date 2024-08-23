const Project = require('../models/project');
const apq = require('api-query-params');

const createProject =  async (data) => {
    if (data.type === "EMPTY-PROJECT"){
        let result = await Project.create(data);
        return result
    }
    if (data.type === "ADD-USERS"){
        // console.log(">>> check data: ", data)
        // find project by id
        let myProject = await Project.findById(data.projectId).exec();
        
        for (let i = 0; i < data.usersArr.length; i++) {
            myProject.usersInfor.push(data.usersArr[i]);
        }
        let newResult = await myProject.save();
        return newResult
    }
    if (data.type === "REMOVE-USERS"){
        // console.log(">>> check data: ", data)
        // find project by id
        let myProject = await Project.findById(data.projectId).exec();
        
        for (let i = 0; i < data.usersArr.length; i++) {
            myProject.usersInfor.pull(data.usersArr[i]);
        }
        let newResult = await myProject.save();
        
        console.log(myProject)
        return newResult
    }
    if (data.type === "ADD-TASKS"){
        // console.log(">>> check data: ", data)
        // find project by id
        let myProject = await Project.findById(data.projectId).exec();
        console.log(myProject)

        for (let i = 0; i < data.tasksArr.length; i++) {
            myProject.tasks.push(data.tasksArr[i]);
        }
        let newResult = await myProject.save();
        return newResult
    }
    if (data.type === "REMOVE-TASKS"){
        // console.log(">>> check data: ", data)
        // find project by id
        let myProject = await Project.findById(data.projectId).exec();
        
        for (let i = 0; i < data.tasksArr.length; i++) {
            myProject.tasks.pull(data.tasksArr[i]);
        }
        let newResult = await myProject.save();
        
        console.log(myProject)
        return newResult
    }
    return null
}

const getProject = async(queryString) => {
    const page = queryString.page
    const { filter
        , limit
        , population
     } = apq(queryString)
    delete filter.page;

    let offset = (page - 1) * limit;
    result = await Project.find(filter)
                        .populate(population)
                        .skip(offset)
                        .limit(limit)
                        .exec();
    return result
}

const uProject =  async(data) => {
    let result = await Project.updateOne({_id: data.id}, {...data})
    return result
}

const dProject = async(id) => {
    let result = await Project.deleteById(id)
    return result
}

module.exports = { createProject
    , getProject
    , uProject
    , dProject
 }