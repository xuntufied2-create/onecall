// OneCall App

document.querySelectorAll(".service").forEach(function(service) {
  service.addEventListener("click", function() {
    alert("You selected: " + this.innerText.replace(/\n/g, " "));
  });
});

document.querySelector(".button").addEventListener("click", function() {
  alert("Welcome to OneCall!");
});
