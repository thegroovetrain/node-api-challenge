module.exports = () => (req, res, next) => {
    message = null;

    if (!req.body) {
        message = "Missing action data";
    } else if (!req.body.project_id) {
        message = "Missing project_id";
    } else if (!req.body.description) {
        message = "Missing description";
    } else if (req.body.description && req.body.description.length > 128) {
        message = "Description too long";
    } else if (!req.body.notes) {
        message = "Missing notes";
    }

    if (message) {
        return res.status(400).json({message: message});
    }

    next();
}