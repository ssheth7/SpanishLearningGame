const bcrypt = require('bcrypt');
const {MongoClient} = require("mongodb");
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
        let initialUser = {
            username : "ssheth7",
            password: "password",
            level : {
                1 : [100, 80, 90, 80, 100],
                2 : [null, null],
                3 : [null, null]
            }
        }
        await collection.insertOne(initialUser);
        client.close();    
}
main().catch((e) => client.close() && console.error(e));
