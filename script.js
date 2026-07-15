const form = document.getElementById("appointment");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
let department = document.getElementById("department").value;

   if(name.length < 3){
    alert("Name must be at least 3 characters.");
    return;
}

if(phone.length !== 11){
    alert("Phone number must be exactly 11 digits.");
    return;
}
    else{
        submitBtn.innerHTML = '<span class="spinner"></span>Sending...';
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
submitBtn.innerHTML = '<span id="btn-text">Book Appointment</span>';
submitBtn.disabled = false;
form.reset();
           
        })
        .catch(function (error) {
            alert("Email Failed!");
          submitBtn.innerHTML = '<span id="btn-text">Book Appointment</span>';
submitBtn.disabled = false;
            console.log(error);
        });

    }

});

