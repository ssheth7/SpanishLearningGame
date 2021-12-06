import middle from "../../../middleware/middle"

const handler = async function (req, res) {
  if (req.method !== "POST")
    return res.status(405).json({
      error: "Method not allowed",
    })

  if (!req.body.module_id)
    return res.status(400).json({
      error: "Missing module_id",
    })

  if (!req.body.grade)
    return res.status(400).json({
      error: "Missing grade",
    })

  let { module_id, grade } = req.body

  try {
    grade = parseFloat(grade)
  } catch (e) {
    return res.status(400).json({
      error: "Grade must be a number",
    })
  }

  if (grade < 0 || grade > 100)
    return res.status(400).json({
      error: "Grade must be between 0 and 100",
    })

  // TODO store in database
  return res.status(200).json({
    success: true,
  })
}

export default middle(handler)
