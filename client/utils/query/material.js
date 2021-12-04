import levels from "../../modules.json"

export const getAllLevels = async () => {
  return levels
}

export const getLevelById = async (id) => {
  return levels.find((module) => module.id === id)
}

export const getModule = async 
