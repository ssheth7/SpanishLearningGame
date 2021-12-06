import mongo from "./mongo"
import auth from "./auth"

const middles = [mongo, auth]

const middle = (handler) => async (req, res) => {
  for (let middle of middles) handler = middle(handler)

  return handler(req, res)
}

export default middle
