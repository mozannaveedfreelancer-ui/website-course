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

const tableBody = document.getElementById("tableBody");

// Read appointments
db.collection("appointments").get().then((snapshot) => {

  snapshot.forEach((document) => {

        const data = document.data();
const id = document.id;

        tableBody.innerHTML += `
        <tr>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.date}</td>
           <td>${data.department}</td>
           <td>${data.status || "Pending"}</td>
           <td>
    <button onclick="approveAppointment('${id}')">Approve</button>
    <button onclick="rejectAppointment('${id}')">Reject</button>
    <button onclick="deleteAppointment('${id}')">Delete</button>
</td>
            
        </tr>
        `;

    });

});
function deleteAppointment(id) {

    if (confirm("Are you sure you want to delete this appointment?")) {

        db.collection("appointments").doc(id).delete().then(() => {

            alert("Appointment Deleted Successfully!");

            location.reload();

        }).catch((error) => {

            console.log(error);
            alert("Delete Failed!");

        });

    }

}
function approveAppointment(id) {

    db.collection("appointments").doc(id).update({

        status: "Approved"

    }).then(() => {

        alert("Appointment Approved!");

        location.reload();

    }).catch((error) => {

        console.log(error);

        alert("Approval Failed!");

    });

}
function rejectAppointment(id) {

    db.collection("appointments").doc(id).update({

        status: "Rejected"

    }).then(() => {

        alert("Appointment Rejected!");

        location.reload();

    }).catch((error) => {

        console.log(error);

        alert("Reject Failed!");

    });

}