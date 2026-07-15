const form = document.getElementById("appointment");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
let department = document.getElementById("department").value;

    if(name === "" || email === "" || phone === ""){
        alert("Please fill all fields.");
    }
    else{

      emailjs.send("service_d1z53t1", "template_zxcu7me", {
    name: name,
    email: email,
    phone: phone,
    date: date,
    department: department
})
        .then(function () {
            alert("Appointment Booked Successfully!");
            form.reset();
        })
        .catch(function (error) {
            alert("Email Failed!");
            console.log(error);
        });

    }

});

