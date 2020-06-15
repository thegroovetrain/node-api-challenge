const actionModel = require('../data/helpers/actionModel');

module.exports = () => (req, res, next) => {
    actionModel.get(req.params.id).then(action => {
        if(action) {
            req.action = action;
            next();
        } else {
            res.status(400).json({message: "Invalid action ID"});
        }
    }).catch(next);
}