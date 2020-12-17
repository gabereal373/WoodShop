const { MongoClient } = require("mongodb")      //create client class
const uri = "mongodb://10.0.0.208:27017"




async function contactUs() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("woodshop");
        console.log(`Connected to database ${db.databaseName}`);
        var query = {"name" : "rocky"};
        // var query = {"name" : name, "email" : email, "address" : address, "message" : message};
        db.collection("contactUs").insertOne(query);
        console.log("Insertion Complete");
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`);

    }
    finally {
        client.close();
    }

};
contactUs();

