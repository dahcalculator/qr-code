import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
        public_id: String,
        url: String,
      },
      role: {
        type: String,
        default: "user",
      },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
