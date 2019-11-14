[].forEach.call(document.querySelectorAll("a-box"), function(box) {
   box.addEventListener("mouseenter", function() {
      this.setAttribute("color", "green");
   });

   box.addEventListener("mouseleave", function() {
      this.setAttribute("color", "white");
   });

   box.addEventListener("mouseenter", function() {
	  document.querySelector("#eur").setAttribute("visible", true);
   });
	
	box.addEventListener("mouseleave", function() {
       document.querySelector("#eur").setAttribute("visible", false);
   });
});
