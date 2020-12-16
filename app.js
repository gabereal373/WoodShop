const {MongoClient} = require("mongodb");        //create client class


const uri = "mongodb://127.0.0.1:27017"

async function connect() {
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const db = client.db("woodshop");
        console.log('Connected to database')
    }
    catch (ex) {
        console.error('Something bad happened')

    }
    finally {
        client.close();
    }
}
connect();
