module.exports = (req, res, next) => {
    if (!req.user) {
        return res.redirect("/v1/admin/auth/login");
    }
    return next();
};