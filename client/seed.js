const bcrypt = require('bcrypt');
const faker = require("faker");
const {MongoClient} = require("mongodb");

const numUsers = 20;
const randomResult = Math.random() > 0.5; //needs to change ; it is always true
const generateUser = () => {
    return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        level : {
            1 : [randomResult, randomResult, randomResult, randomResult, randomResult],
            2 : [randomResult, randomResult],
            3 : [randomResult, randomResult]
        }
    };
}

const uri = "mongodb://localhost:27017";
let client;

async function main() {
        client = new MongoClient(uri, {
            useNewUrlParser: true,
        });
        await client.connect();
        const db = client.db("SpanishLearningGame");//.collection("users");
        const collection = db.collection("users");
        collection.drop();
        let users = [];
        for (let i = 0; i < numUsers; i++) {
            users.push(generateUser());
        }
        await collection.insertMany(users);
        client.close();    
}
main().catch((e) => client.close() && console.error(e));
