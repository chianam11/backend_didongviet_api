// middlewares/auth/auth.middleware.js

const { errorResponse } = require("../../helpers/response");
const { User, Blacklist } = require("../../models");
const { verifyToken } = require("../../utils/jwt");
module.exports = async (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");
        const accessToken = authHeader?.split(" ")[1] || req.cookies?.token;


        if (!accessToken) {
            return errorResponse(res, 401, "Access token is required");
        }

        // Kiểm tra token trong danh sách blacklist
        const isBlacklisted = await Blacklist.findOne({ where: { token: accessToken } });
        if (isBlacklisted) {
            return errorResponse(res, 401, "Token is blacklisted");
        }

        // Giải mã token
        const { userId, exp } = verifyToken(accessToken);
        if (!userId) {
            return errorResponse(res, 401, "Invalid token");
        }

        // Tìm người dùng
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["password"] },
        });

        if (!user || user.status === false) {
            return errorResponse(res, 401, "User is blocked or not found");
        }

        // Gán user vào request
        req.user = {
            ...user.toJSON(),
            accessToken,
            exp,
        };

        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        return errorResponse(res, 401, "Unauthorized");
    }
};
