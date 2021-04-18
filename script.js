function italic(){
  document.getElementById("text").style.fontStyle = "italic";
}
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.code === "KeyI"){
    document.getElementById("text").style.fontStyle = "italic";
    event.preventDefault();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.code === "KeyC"){
    document.getElementById('text').value='';
    event.preventDefault();
  }
});
function underline(){
  document.getElementById("text").style.textDecoration = "underline";
}
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.code === "KeyU"){
    document.getElementById("text").style.textDecoration = "underline";
    event.preventDefault();
  }
});
function bold(){
  document.getElementById("text").style.fontWeight = "bold";
}
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.code === "KeyB"){
    document.getElementById("text").style.fontWeight = "bold";
    event.preventDefault();
  }
});
function strikethrough(){
  document.getElementById("text").style.textDecoration = "line-through";
}
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.code === "KeyS"){
    document.getElementById("text").style.textDecoration = "line-through";
    event.preventDefault();
  }
});
function reset_font_styles(){
  var font_styles = document.getElementById("text");
  font_styles.style.fontStyle = "normal";
  font_styles.style.textDecoration = "none";
  font_styles.style.fontWeight = "normal";
}
function colorize(){
  var color = document.getElementById("the_color").value;
  document.getElementById("text").style.color = color;
  document.getElementById('the_color').value='';
}
function fade(){
  document.getElementById("text").style.opacity = "0.5";
}
function reset_every(){
  window.location.href = "https://Customize-Text.jwz6.repl.co";
}
function font_size(){
  var font_size = document.getElementById("font_size").value;
  if (font_size > 100){
    alert("Font Size Must Be Less Than 100px");
  }
  else if (font_size - font_size != 0){
    alert("Invalid Input. Try Again")
  }
  else {
    var final_font_size = font_size + "px"
    document.getElementById("text").style.fontSize = final_font_size;
  }
  document.getElementById('font_size').value='';
}
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.code === "KeyF"){
    document.getElementById("text").style.opacity = "0.5";
    event.preventDefault();
  }
});
function hide(){
  document.getElementById("text").style.opacity = "0";
}
function show(){
  document.getElementById("text").style.opacity = "1";
}
function updates(){
  window.location.href = "updates.html";
}