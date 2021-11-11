import { Document, Schema, model, connect } from "mongoose"

export default Schema({
  token: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})
