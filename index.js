// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Update CORS to allow your frontend URL along with localhost
// const corsOptions = {
//   origin: [
//     'http://localhost:5173',               // local frontend
//     'https://your-frontend-url.onrender.com' // replace with your actual deployed frontend URL
//   ],
//   credentials: true,
// };

// app.use(cors(corsOptions));

// const PORT = process.env.PORT || 8000;

// // API routes
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);

// // Connect to DB first, then start the server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running at port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to connect to DB", err);
//   });
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Update CORS to allow your frontend URL along with localhost
const corsOptions = {
  origin: [
    'http://localhost:5173',                          // Local frontend
    'http://job-fusion-frontend-witc.vercel.app'          // ✅ Replace with actual deployed frontend URL
  ],
  credentials: true,
};

app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("JobFusion Backend is Live ✅");
});

// Server port
const PORT = process.env.PORT || 8000;

// Connect to DB first, then start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
  });
