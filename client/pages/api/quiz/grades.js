import middle from "../../../middleware/middle"
import ModuleGradeRelationship from "../../../backend/model/ModuleGradeRelationship"

const handler = async function (req, res) {
  if (req.method !== "GET")
    return res.status(405).json({
      error: "Method not allowed",
    })

  if (!req.user) {
    return res.status(401).json({
      error: "Unauthorized",
    })
  }

  const { user } = req

  const gradeRelationships = await ModuleGradeRelationship.find({
    user: user,
  })

  let rel = {}

  for (let attempt of gradeRelationships) {
    const { module_id, grade, attemptDate } = attempt
    if (!rel[module_id]) {
      rel[module_id] = {
        grade,
        attempts: [],
      }
    }
    if (grade > rel[module_id].grade) {
      rel[module_id].grade = grade
    }
    rel[module_id].attempts.push({
      grade,
      attemptDate,
    })
  }

  //   const rel = new ModuleGradeRelationship({ user: user, grade, module_id, attemptDate: new Date() })
  //   await rel.save()

  //   console.log({ rel })

  return res.status(200).json({
    grades: rel,
    success: true,
  })
}

export default middle(handler)
