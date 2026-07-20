// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCZthUxtNWuz1AW6rb-cilpIgLdG6YbJcU",
  authDomain: "doctor-consultation-webs-b7d79.firebaseapp.com",
  projectId: "doctor-consultation-webs-b7d79",
  storageBucket: "doctor-consultation-webs-b7d79.firebasestorage.app",
  messagingSenderId: "110273665291",
  appId: "1:110273665291:web:fa58f0eee9332b6723aa0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {

    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (email === "" || phone === "") {
        alert("Please enter Email and Phone Number");
        return;
    }

    db.collection("appointments")
      .where("email", "==", email)
      .where("phone", "==", phone)
      .get()
      .then((snapshot) => {

          if (snapshot.empty) {

              result.innerHTML = "❌ No Appointment Found";
              result.style.color = "red";

          } else {

              snapshot.forEach((doc) => {

                  const data = doc.data();

                  result.innerHTML = "Appointment Status: <b>" + data.status + "</b>";

                  if (data.status === "Approved") {
                      result.style.color = "green";
                  } else if (data.status === "Rejected") {
                      result.style.color = "red";
                  } else {
                      result.style.color = "orange";
                  }

              });

          }

      })
      .catch((error) => {

          console.log(error);
          alert("Something went wrong!");

      });

});