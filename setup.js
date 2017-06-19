function setup() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = Math.min(window.innerWidth, window.innerHeight);
  ctx.canvas.height = 5/6 * Math.min(window.innerWidth, window.innerHeight);
}
document.addEventListener("DOMContentLoaded", function(event) { 
  setup();
});//When the document is loaded, resize the canvas
