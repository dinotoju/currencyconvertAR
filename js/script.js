[].forEach.call(document.querySelectorAll("a-plane"), function(plane) {
   plane.addEventListener("mouseenter", function() {
      this.setAttribute("color", "red");
   });

   plane.addEventListener("mouseleave", function() {
      this.setAttribute("color", "white");
   });

   plane.addEventListener("click", function() {
      this.setAttribute("color", "green");
   });
});// JavaScript Document