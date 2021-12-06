import middle from "../../../middleware/middle"
import ModuleGradeRelationship from "../../../backend/model/ModuleGradeRelationship"

const handler = async function (req, res) {
  if (req.method !== "GET")
    return res.status(405).json({
      error: "Method not allowed",
    })

//   const { user } = req

//   const rel = new ModuleGradeRelationship({ user: user, grade, module_id, attemptDate: new Date() })
//   await rel.save()

//   console.log({ rel })

  return res.status(200).json({
    success: true,
  })
}

export default middle(handler)
