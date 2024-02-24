function myFunction() {
    var x = document.getElementById("toggle_button");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Goodbye";
    } else {
      x.innerHTML = "Hello";
    }
  }