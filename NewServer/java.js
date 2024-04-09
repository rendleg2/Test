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