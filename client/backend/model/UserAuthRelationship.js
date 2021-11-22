import { Document, Schema, model, models } from "mongoose"

const schema = new Schema({
  token: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
})

export default models.UserAuthRelationship || model("UserAuthRelationship", schema)
