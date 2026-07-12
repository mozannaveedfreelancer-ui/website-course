const form = document.getElementById("appointment");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
   

    if(name==="" || email==="" || phone===""){
        alert("Please fill all fields.");
    }
    else{
        alert("Appointment Booked Successfully!");
        form.reset();
    }

});

