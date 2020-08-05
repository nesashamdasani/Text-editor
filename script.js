document.getElementById("heading").innerHTML =
  localStorage["title"] || "Make some notes";
document.getElementById("content").innerHTML =
  localStorage["text"] || "They are automatically saved"; 

setInterval(function() {
  localStorage["title"] = document.getElementById("heading").innerHTML;
  localStorage["text"] = document.getElementById("content").innerHTML; 
}, 1000);