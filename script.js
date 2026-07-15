const form = document.getElementById("appointment");
const submitBtn = document.getElementById("submit-btn");

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
         submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

      emailjs.send("service_d1z53t1", "template_zxcu7me", {
    name: name,
    email: email,
    phone: phone,
    date: date,
    department: department
})
        .then(function () {
           document.getElementById("success-message").style.display = "block";
           setTimeout(function () {
    document.getElementById("success-message").style.display = "none";
}, 3000);
submitBtn.innerHTML = "Book Appointment";
submitBtn.disabled = false;
form.reset();
           
        })
        .catch(function (error) {
            alert("Email Failed!");
            submitBtn.innerHTML = "Book Appointment";
submitBtn.disabled = false;
            console.log(error);
        });

    }

});

