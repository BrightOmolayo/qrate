function myFunction(){
  var x = document.getElementById("dropdown1");

  var link1 = document.getElementById("link1");
      link1.textContent= "Records";

  var link2 = document.getElementById("link2");
      link2.textContent= "Cassettes";

  var link3 = document.getElementById("link3");
      link3.textContent= "Stories";

  var link4 = document.getElementById("link4");
      link4.textContent= "Qrates Curated";

  if(x.style.display === "none"){
    x.style.display = "block";
  }
   else{
     x.style.display = "none";
  }
}

function toggleSection(element) {
  var content = element.nextElementSibling;

  // Close all other sections before opening the clicked one
  var allSections = document.querySelectorAll('.accordion-content');
  allSections.forEach(function (section) {
    if (section !== content && section.classList.contains('show')) {
      section.classList.remove('show');
    }
  });

  // Toggle the 'show' class to display or hide the content
  content.classList.toggle('show');
}


