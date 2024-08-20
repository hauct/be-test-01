const {createProject
    , getProject
    , uProject
    , dProject} = require('../services/projectService')

const postCreateProject = async (req, res) => {
    let result = await createProject(req.body);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

const getAllProject = async (req, res) => {
    let result = await getProject(req.query);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

const updateProject = async (req, res) => {
    let result = await uProject(req.body);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

const deleteProject = async (req, res) => {
    let result = await dProject(req.body.id);
    return res.status(200).json(
        {
            EC:0
            , data: result
        }
    )
}

module.exports = {
    postCreateProject
    , getAllProject
    , updateProject
    , deleteProject
}