import User from "../models/userModel.js"; 

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Unauthorized - Invalid token" });
    }
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user; 
    next();

  } catch (error) {
    let message = "Unauthorized - Invalid token";
    if (error.name === "TokenExpiredError") message = "Token expired";
    else if (error.name === "JsonWebTokenError") message = "Invalid token";

    return res.status(401).json({ success: false, message });
  }
};
