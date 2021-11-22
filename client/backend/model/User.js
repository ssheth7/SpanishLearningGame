import { Document, Schema, model, models } from "mongoose"

const schema = new Schema({
  email: String,
  hashedPassword: String,
})

export default models.User || model("User", schema)
