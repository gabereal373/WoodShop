const header = document.querySelector("header");
const {MongoClient} = require("mongodb");        //create client class

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  prevScrollPos > currentScrollPos 
    ? header.classList.remove("scroll") 
    : header.classList.add("scroll");

  prevScrollPos = currentScrollPos;
};

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
