const { response, request } = require('express');


const getUsers = (req = request, res = response) => {

    const { q, name = 'No name', apikey, page = 1, limit } = req.query
    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey,
        page,
        limit
    });
}
const putUsers = (req, res = response) => {

    const id = req.params.id;
    res.status(400).json({
        msg: 'put API - controller',
        id
    });
}
const postUsers = (req, res = response) => {

    const body = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        body
    });
}
const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'delete API - controller',
    });
}
const patchUsers = (req, res = response) => {
    res.json({
        msg: 'patch API - controller',
    });
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}