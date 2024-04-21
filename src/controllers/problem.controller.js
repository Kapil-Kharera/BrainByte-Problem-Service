const { StatusCodes } =  require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({message: 'Ping controller is up'});
}

async function addProblem(req, res, next) {
    try {
        console.log("Incoming req body : ", req.body);
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newProblem
        })
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
      try {
        throw new NotImplemented('getProblem');
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res) {
      try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        })
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res) {
      try {
        throw new NotImplemented('deleteProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {
      try {
        throw new NotImplemented('updateProblem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}