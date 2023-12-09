function myFunction(){
  var x = document.getElementById("dropdown1");

  var y = document.getElementById("link1");
      y.textContent= "LEARN MORE";

  var p = document.getElementById("p")
      p.textContent= "With over 40 colors and over 120,000 variations, control what your record will look like."

  if(x.style.display === "none"){
    x.style.display = "block";
  }
   else{
     x.style.display = "none";
  }
}


