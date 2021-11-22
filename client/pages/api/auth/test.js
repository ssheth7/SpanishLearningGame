import middle from "../../../middleware/middle"

const handler = async function (req, res) {
  res.json(req.cookies)
}

export default middle(handler)
