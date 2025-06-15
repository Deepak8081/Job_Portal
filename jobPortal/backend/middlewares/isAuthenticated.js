import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "First login to access this resource",
        success: false,
      });
    }
    // Verify JWT
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    const user = await User.findById(decoded.userId);
    if (!user || user.currentToken !== token) {
      return res.status(401).json({
        message: "Session expired or invalid. Please login again.",
        success: false,
      });
    }

    req.id = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Authentication failed",
      success: false,
    });
  }
};

export default isAuthenticated;
