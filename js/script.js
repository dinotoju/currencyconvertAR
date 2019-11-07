[].forEach.call(document.querySelectorAll("a-box"), function(box) {
   box.addEventListener("mouseenter", function() {
      this.setAttribute("color", "red");
   });

   box.addEventListener("mouseleave", function() {
      this.setAttribute("color", "white");
   });

   box.addEventListener("click", function() {
      this.setAttribute("color", "green");
   });
});// JavaScript Document