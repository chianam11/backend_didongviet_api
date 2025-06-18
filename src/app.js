require("dotenv").config(); // Load biến môi trường từ file .env

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const cors = require("cors");
const methodOverride = require("method-override");

// Middleware và route
const validate = require("./middlewares/validate");
const sanitizeMiddleware = require("./middlewares/sanitizeMiddleware");
const authMiddleware = require("./middlewares/auth/auth.middleware");
const passportLocal = require("./passports/passport.local");

// Routes
const indexRouter = require("./routes/index");
const authentication = require("./routes/v1/auth/auth");
const usersRouter = require("./routes/v1/users/users.router");
const rolesRouter = require("./routes/v1/roles/roles.router");
const productRouter = require("./routes/v1/products/products.router");
const clientApi = require("./routes/api/index");

// Sequelize models
const { User } = require("./models/index");

// Khởi tạo ứng dụng Express
const app = express();

// === CẤU HÌNH CƠ BẢN ===
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

// === MIDDLEWARE CƠ BẢN ===
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));

// === CẤU HÌNH SESSION & FLASH ===
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 giờ
  })
);
app.use(flash());

// === CẤU HÌNH PASSPORT ===
app.use(passport.initialize());
app.use(passport.session());
passport.use("local", passportLocal);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// === CẤU HÌNH CORS ===
const { CLIENT, SERVER, NODE_ENV } = process.env;

const whitelist = [CLIENT, SERVER].filter(Boolean); // loại bỏ undefined hoặc chuỗi rỗng

const corsOptions = {
  origin: function (origin, callback) {
    // Nếu đang ở môi trường development → cho phép mọi origin
    if (NODE_ENV === 'development') {
      callback(null, true);
    }
    // Nếu không có origin (ví dụ như từ Postman) → cho phép
    else if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    }
    // Ngược lại, chặn CORS
    else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/no-sleep", (req, res) => {
  return res.json("ok").status(200)
})

// === ROUTES ===

// Trang chính (Client-side render với EJS)

// API Client (ví dụ: /api/products)
clientApi(app);

// Auth routes (không cần middleware bảo vệ)
authentication(app);
app.use("/", indexRouter);

// Middleware validate & sanitize chỉ cho API
app.use("/v1", validate, sanitizeMiddleware);

// Các route cần bảo vệ bằng authMiddleware
usersRouter(app);
rolesRouter(app);
productRouter(app);

// === XỬ LÝ LỖI 404 ===
app.use((req, res, next) => {
  res.status(404).render("notFound", { layout: false });
});

// === XỬ LÝ LỖI CHUNG ===
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
