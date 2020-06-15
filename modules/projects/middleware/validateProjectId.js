const projectModel = require('../../../data/helpers/projectModel');

module.exports = () => (req, res, next) => {
    projectModel.get(req.params.id).then(project => {
        if(project) {
            req.project = project;
            next();
        } else {
            res.status(400).json({message: "Invalid project ID"});
        }
    }).catch(next);
}