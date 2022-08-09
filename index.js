var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block"
}
  
function namee() {
 
    var self = this;

    console.log("this.name = " + this.name);

    console.log("self.name = " + self.name);

    (function() {

        console.log("this.name = " + this.name);

        console.log("self.name = " + self.name);

    }());

}





    var myObject = {
        name: "Adalab",
        func: function() {
            var self = this;
            console.log("outer func:  this.name = " + this.name);
            console.log("outer func:  self.name = " + self.name);
            (function() {
                console.log("inner func:  this.name = " + this.name);
                console.log("inner func:  self.name = " + self.name);
            }());
        }
    };
    myObject.func();
    //this refers to the inner object calling function and self refers to the outer object of the function
