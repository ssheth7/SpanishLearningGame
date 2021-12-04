import _levels from "../../modules.json"

export const getAllLevels = async () => {
  return _levels.levels
}

export const getLevelById = async ({ id }) => {
  const levels = await getAllLevels()
  return levels?.[id]
}

export const getModule = async ({ levelID, moduleID }) => {
  const level = await getLevelById({ id: levelID })
  if (!level) return null
  const mod = level.modules.find((module) => module.id === moduleID) || null
  if (!mod) return null
  return { module: mod, level }
}
