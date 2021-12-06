import { Document, Schema, model, models } from "mongoose"

const schema = new Schema({
  module_id: String,
  grade: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  attemptDate: Date,
})

export default models.ModelGradeRelationship || model("ModelGradeRelationship", schema)
