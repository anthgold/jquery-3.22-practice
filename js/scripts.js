$(document).ready(function(){
  $("h1").click(function() {
    alert("This is a header.");
    alert("More than one thing");
  });
  $("p").dblclick(function(){
    alert("This is a paragraph");
  });
  $("img").click(function(){
    alert("This is an image");
  });
  $("h2").click(function(){
    alert("Holy Crap it's Header 2");
  });
  $("ul").dblclick(function() {
    alert("OMG! A list element! An unordered list element!");
  });
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });
});
