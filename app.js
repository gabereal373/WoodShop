
console.log("it works!")
function validation() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var contact_message = document.getElementById("contact-message").value;

   
    if(email.length > 5 && email.includes('@') && email.includes('.')) {
        console.log('Email is valid');
    } else {
        alert("Invalid Email");
        
    }

    if(name < 3) {
        alert("Invalid Name");
        
    }

    if(address < 5 || address.match(/[^]{}/)) {
        alert("Invalid Address");
    }

}
       



















