const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Goals'
    });
})

const setGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'create Goal'
    });
})


const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'update Goal' + req.params.id
    });
})


const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'delete Goal' + req.params.id
    });
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
