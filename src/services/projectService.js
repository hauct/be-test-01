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
        
        console.log(myProject)
        return newResult
    }
    return null
}

const getProject = (data) => {
    return data
}

module.exports = { createProject
    , getProject
 }