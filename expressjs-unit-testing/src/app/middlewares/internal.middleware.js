
const InternalMiddleware = (req, res, next) => {
    res.internal = req.path.includes('/internal');
    next();
};

export default InternalMiddleware;