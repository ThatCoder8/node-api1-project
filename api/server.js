const express = require('express')

const server = express()

server.get('/api/users', (req, res) => {
    console.log('getting all users')
    res.json('users')
})

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
}) //catch all

module.exports = server; 
