document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    var paragraph = document.getElementById("myParagraph");

    button.addEventListener("click", function() {
        paragraph.textContent = "Yeah, the text has been changed!";
    });
});