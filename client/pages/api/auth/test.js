import middle from "../../../middleware/middle"

const handler = async function (req, res) {
  res.json({cookies: req.cookies, user: req.user || ""})
}

export default middle(handler)
