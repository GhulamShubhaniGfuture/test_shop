import ApiError from "@src/utils/ApiError";
import { asyncMiddleware } from "@src/utils/asyncHandler";
import jwt from "jsonwebtoken";

export const authMiddleware = asyncMiddleware(async (req, res, next) => {
//   console.log(req.cookies, "cookies");

  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  let user;
  try {
    user = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string,
      (error: any, decoded: any) => {
        if (error) {
          return res.status(403).json(new ApiError(400, "Invalid token"));
        }
        console.log(decoded,"decoded",decoded.data.userId);
        
        req.user = decoded.data;
        req._id = decoded.data._id;
        req.userType = decoded.data.userType;
        req.userId = decoded.data.userId;
        // req.userId = decoded.data.userId;
        // console.log(req.user, "req.user");
      }
    );
    next();
    // console.log(user, "user");
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
});
