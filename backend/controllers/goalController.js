const getGoals = async (req, res) => {
    res.status(200).json({
        message: 'Goals'
    });
}

const setGoal = async (req, res) => {
    res.status(200).json({
        message: 'create Goal'
    });
}


const updateGoal = async (req, res) => {
    res.status(200).json({
        message: 'update Goal' + req.params.id
    });
}


const deleteGoal = async (req, res) => {
    res.status(200).json({
        message: 'delete Goal' + req.params.id
    });
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}