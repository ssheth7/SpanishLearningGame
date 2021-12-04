import modules from "../../modules.json"

export const getAllLevels = async () => {
  return modules
}

export const getLevelById = async (id) => {
  return modules.find((module) => module.id === id)
}
