import { db } from "./firebase-config.js";

document.getElementById("appointment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const nameValue = document.getElementById("name").value;
  const dateValue = document.getElementById("dateInput").value;
  const departmentValue = document.getElementById("department").value;
  const phoneValue = document.getElementById("phone").value;

  // Convert to JavaScript Date object
  const selectedDate = dateValue ? new Date(dateValue) : null;

  // Save to Firestore
  db.collection("patient").add({
    name: nameValue,
    date: selectedDate,
    department: departmentValue,
    phone: phoneValue
  })
  .then(function (docRef) {
    const msgEl = document.getElementById("formMessage");
    msgEl.style.color = "green";
    msgEl.textContent = `Appointment booked successfully for ${nameValue} in ${departmentValue} department on ${dateValue}.`;
    msgEl.style.display = "block";

    document.getElementById("appointment-form").reset();
  })
  .catch(function (error) {
    console.error("Error adding document:", error);
    const msgEl = document.getElementById("formMessage");
    msgEl.style.color = "red";
    msgEl.textContent = "Failed to save appointment. Please try again.";
    msgEl.style.display = "block";
  });
});
