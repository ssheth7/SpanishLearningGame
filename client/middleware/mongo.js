import mongoose from "mongoose"

const DEFAULT_URL = "mongodb://mongodb:27017/spanish"

const mongo = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res)
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGO_URL || DEFAULT_URL, {
    useNewUrlParser: true,
  })
  return handler(req, res)
}

export default mongo
