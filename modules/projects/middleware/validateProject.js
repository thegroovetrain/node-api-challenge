module.exports = () => (req, res, next) => {
    message = null;

    if (!req.body) {
        message = "Missing project data";
    } else if (!req.body.name) {
        message = "Missing project name";
    } else if (!req.body.description) {
        message = "Missing project description";
    }

    if (message) {
        return res.status(400).json({message: message});
    }

    next();
}