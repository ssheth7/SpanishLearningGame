import User from "../model/User"
import UserAuthRelationship from "../model/UserAuthRelationship"
import crypto from "crypto"

async function hash(password) {
  return new Promise((resolve, reject) => {
    // generate random 16 bytes long salt
    const salt = crypto.randomBytes(16).toString("hex")

    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err)
      resolve(salt + ":" + derivedKey.toString("hex"))
    })
  })
}

async function verify(password, hash) {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":")
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err)
      resolve(key == derivedKey.toString("hex"))
    })
  })
}

export const doesUserExist = async ({ email }) => {
  const user = await User.findOne({ email })
  return !!user
}

export const createAccount = async ({ email, password }) => {
  if (await doesUserExist({ email })) throw new Error({ code: 403, message: "User already exists" })

  const hashedPassword = await hash(password)

  const user = new User({ email, hashedPassword })
  await user.save()
  return user
}

export const authenticate = async ({ email, password }) => {
  const user = await User.findOne({ email: email })
  if (!user) throw new Error({ code: 404, message: "User does not exist" })

  const { hashedPassword } = user
  const valid = await verify(password, hashedPassword)

  if (!valid) throw new Error({ code: 400, message: "Invalid password" })

  const token = crypto.randomBytes(16).toString("hex")
  const rel = new UserAuthRelationship({ user: user, token })
  await rel.save()
  return { user, token }
}
