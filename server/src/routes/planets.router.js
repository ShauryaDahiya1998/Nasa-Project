const express = require('express');
const { 
    getAllPlanets,
} = require('../routes/planets.controller.js');

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter;