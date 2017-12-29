class AuthorizationMiddleware {
    static isAuthenticated(req, res, next) {
console.log('adads');
        next();
    }

    static isAdmin(req, res, next) {

        next();
    }
}
module.exports = AuthorizationMiddleware;