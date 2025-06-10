
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
//     'http://localhost:5173',                          // Local frontend
//     'https://job-fusion-frontend-witc.vercel.app',    // Vercel deployed frontend
//     'http://job-fusion-frontend-witc.vercel.app'      // HTTP version just in case
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
//   exposedHeaders: ['set-cookie']
// };

// app.use(cors(corsOptions));

// // API routes
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);

// // ✅ Root route for testing
// app.get("/", (req, res) => {
//   res.send("JobFusion Backend is Live ✅");
// });

// // Server port
// const PORT = process.env.PORT || 8000;

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
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js'; // adjust as needed
import userRoutes from './routes/user.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Fix CORS
app.use(cors({
  origin: ['https://job-fusion-frontend-witc.vercel.app', 'http://localhost:5173'],
  credentials: true,
}));

// Routes
app.use('/api/user', userRoutes);

// Default
app.get('/', (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});