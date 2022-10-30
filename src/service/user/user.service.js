import { User } from "../../Model/user/user.model";

export const userService = {
  create: (req, res) => {
    const result = { email: "test@test.com" };
    return result;
  },

  list: async (req, res) => {
    try {
      await User.create({
        email: "test@test.com",
        password: "pass@word",
        name: "Tester",
      });
    } catch (e) {}

    const result = await User.find({});
    // throw new Error("This is an error", 404);
    return result;
  },

  get: (req, res) => {
    res.status(200).json({
      result: "User - Get",
    });
  },

  patch: (req, res) => {
    res.status(200).json({
      result: "User - Patch",
    });
  },

  delete: (req, res) => {
    res.status(200).json({
      result: "User - Delete",
    });
  },
};
