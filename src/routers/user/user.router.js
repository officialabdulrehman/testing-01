import express from "express";
import { userService } from "../../service/user/user.service";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  let result = null;

  try {
    result = await userService.list(req, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      method: "User - List",
      result,
      errors: ["something went wrong", e.message],
    });
  }

  res.status(200).json({
    method: "User - List",
    result,
    errors: [],
  });
});

userRouter.get("/:id", userService.get);

userRouter.post("/", userService.create);

userRouter.patch("/:id", userService.patch);

userRouter.delete("/:id", userService.delete);

export default userRouter;
