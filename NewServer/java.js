/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


function loadClassYearIframe(classYearCode,classYearTitle)
{
  var classUrl = "http://student.share.johnlearnings.com/Rosmini/" + classYearCode + "/";
  document.getElementById("yearHeader").innerHTML = classYearTitle;
  document.getElementById("yearPopout").href = classUrl;
  // alert(classUrl);
  document.getElementById("classiframe").src = classUrl;
}

document.querySelectorAll('.btn').forEach((button) => { // Class of the buttons that trigger the untoggle
  button.addEventListener("click", (e) => {
      let buttons = document.querySelectorAll('.btn'); // Select all buttons with class 'btn'
      buttons.forEach((btn) => {
          if (btn !== e.target) { // Exclude the button that was clicked
              let bsButton = new bootstrap.Button(btn);
              if (bsButton._element.classList.contains('active')) { // If the button is active
                  bsButton.toggle(); // Untoggle the button
              }
          }
      });
  });
});

