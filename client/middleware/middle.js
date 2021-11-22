import mongo from "./mongo"

const middles = [mongo]

const middle = (handler) => async (req, res) => {
  for (let middle of middles) handler = middle(handler)

  return handler(req, res)
}

export default middle
