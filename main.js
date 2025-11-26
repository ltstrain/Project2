const instructorEmail = "lstrain@hawl.iit.edu";

document.addEventListener("DOMContentLoaded", function() {
  const qBtn = document.getElementById("questions-btn");
  if(qBtn){
    qBtn.addEventListener("click", function() {
      alert("If you have questions, contact me at:\n" + instructorEmail);
    });
  }
});
