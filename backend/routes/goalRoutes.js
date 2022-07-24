const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Goals'
    });
}
);

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Create Goal'
    });
}
);

router.put('/:id', (req, res) => {

    res.status(200).json({
        message: 'Update Goal ' + req.params.id
    });
}
);

router.delete('/:id', (req, res) => {
    res.status(200).json({
        message: 'Delete Goal ' + req.params.id
    });
}
);

module.exports = router;