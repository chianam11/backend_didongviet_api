const { successResponse, errorResponse } = require("../../../../helpers/response")
const { User, UserToken, Blacklist } = require("../../../../models/index")
const bcrypt = require('bcrypt');
const { createAccessToken, createRefreshToken } = require("../../../../utils/jwt")
module.exports = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            console.log("hello");
            console.log(username, password);

            // Kiểm tra thiếu trường
            if (!username || !password) {
                return errorResponse(res, 400, "Username and password are required");
            }

            const user = await User.findOne({ where: { username } });

            if (!user) {
                return errorResponse(res, 401, "User not found");
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return errorResponse(res, 401, "Invalid credentials");
            }

            // Tạo access & refresh token
            const accessToken = createAccessToken({ userId: user.id });
            const refreshToken = createRefreshToken();

            // Lưu refresh token
            await UserToken.create({
                user_id: user.id,
                token: refreshToken,
            });

            // Gửi access token qua cookie
            res.cookie("token", accessToken, {
                httpOnly: true,
                secure: false, // Bật true nếu dùng HTTPS
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000, // 1 ngày
            });

            return successResponse(res, 200, "Login successful", {
                accessToken,
                refreshToken,
                user: {
                    user_id: user.id,
                    name: user.name,
                },
            });
        } catch (e) {
            console.error("Login error:", e);
            return errorResponse(res, 500, "Internal server error");
        }
    },
    profile: async (req, res) => {
        console.log(req.user, 111);

        return successResponse(res, 200, "Success", req.user);
    },
    logout: async (req, res) => {
        const { accessToken, exp } = req.user;
        const [blacklist] = await Blacklist.findOrCreate({
            where: { token: accessToken },
            defaults: { token: accessToken, expired: exp },
        });
        if (blacklist) {
            return successResponse(res, 200, "Success");
        }
        return errorResponse(res, 500, "Server Error");
    },
    refresh: async (req, res) => {
        try {
            const refreshToken = req.cookies.token; // Giả sử bạn lưu refreshToken vào cookie tên là 'token'

            if (!refreshToken) {
                return errorResponse(res, 401, "No refresh token provided");
            }

            // Kiểm tra trong bảng user_tokens
            const storedToken = await UserToken.findOne({
                where: { token: refreshToken },
            });

            if (!storedToken) {
                return errorResponse(res, 403, "Refresh token not found or invalid");
            }

            // Giải mã refreshToken
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET); // Sử dụng bí mật đúng

            const user = await User.findByPk(payload.userId); // Bạn có thể lưu userId vào refreshToken khi tạo ra nó

            if (!user) {
                return errorResponse(res, 404, "User not found");
            }

            // Tạo mới accessToken
            const newAccessToken = createAccessToken({ userId: user.id });

            // Gửi accessToken mới dưới dạng cookie
            res.cookie("token", newAccessToken, {
                httpOnly: true,
                secure: false, // Đổi thành true nếu bạn dùng HTTPS
                sameSite: "lax",
                maxAge: 15 * 60 * 1000, // 15 phút
            });

            return successResponse(res, 200, "Token refreshed", {
                accessToken: newAccessToken,
            });
        } catch (err) {
            console.error("Refresh Token Error:", err);
            return errorResponse(res, 403, "Invalid refresh token");
        }
    },
}