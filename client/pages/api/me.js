import middle from "../../middleware/middle"

const handler = async function (req, res) {
  res.json({ user: req.user || "" })
}

export default middle(handler)
