// SCROLLBAR DISSAPEAR 
const header = document.querySelector("header");

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  prevScrollPos > currentScrollPos 
    ? header.classList.remove("scroll") 
    : header.classList.add("scroll");

  prevScrollPos = currentScrollPos;
};


//create client class
const {MongoClient} = require("mongodb");        
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
};
connect();