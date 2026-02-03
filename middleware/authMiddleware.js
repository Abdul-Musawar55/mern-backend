import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, "secret123");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
}
