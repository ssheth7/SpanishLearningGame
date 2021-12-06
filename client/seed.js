const bcrypt = require("bcrypt")
const faker = require("faker")
const { MongoClient } = require("mongodb")

const numUsers = 20
const ModuleResult = (modulelevel) => {

  let average;
  switch (modulelevel) {
    case 1:
      average = 11; // seconds
      break;
    case 2:
      average = 10; // seconds
      break;
    case 3:
      average = 8; // seconds
      break;
    case 4:
      average = 5; // seconds
      break;
    case 5:
      average = 5; // seconds
      break;
  }

  return {
    initialGrade: Math.floor(Math.random() * 2 + 1) * 10,
    finalGrade: Math.floor(Math.random() * (10 - 6) + 6) * 10,
    timeSpent: Math.random() * (average / 2) + average,
  }
}
const generateUser = () => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    level: {
      1: [ModuleResult(1, 1), ModuleResult(1, 2), ModuleResult(1, 3), ModuleResult(1, 4), ModuleResult(1, 5)],
      2: [ModuleResult(2), ModuleResult(2)],
      3: [ModuleResult(3), ModuleResult(3)],
    },
  }
}

const uri = "mongodb://127.0.0.1:27017"
let client

async function main() {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
  })
  await client.connect()
  const db = client.db("SpanishLearningGame")
  const collection = db.collection("users")
  collection.drop()
  let users = []
  for (let i = 0; i < numUsers; i++) {
    users.push(generateUser())
  }

  await collection.insertMany(users)
  client.close()
}
main().catch((e) => client.close() && console.error(e))
