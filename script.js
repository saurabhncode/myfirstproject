function startExam() {
  window.location.href = "questions.html";
}
function selectSubject(subject) {
  alert("You selected: " + subject);
   localStorage.setItem("selectedSubject", subject);
}
