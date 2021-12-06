import UserAuthRelationship from "../backend/model/UserAuthRelationship"
import User from "../backend/model/User"

const auth = (handler) => async (req, res) => {
  if (req.cookies["spanish_website_cookie"]) {
    const relationship = await UserAuthRelationship.findOne({
      token: req.cookies["spanish_website_cookie"],
    })

    if (relationship) {
      const user = await User.findById(relationship.user)
      req.user = user
    }
  }
  return handler(req, res)
}

export default auth
