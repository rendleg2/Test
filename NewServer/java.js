
// Controlling the Iframes link
function loadClassYearIframe(classYearCode,classYearTitle)
{
  var classUrl = "http://student.share.johnlearnings.com/Rosmini/" + classYearCode + "/";
  document.getElementById("yearHeader").innerHTML = classYearTitle;
  document.getElementById("yearPopout").href = classUrl;
  document.getElementById("classiframe").src = classUrl;
}