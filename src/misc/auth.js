export function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    };
    req.flash("error_msg", "Not Authorized");
    req.redirect("/users/login");
};





