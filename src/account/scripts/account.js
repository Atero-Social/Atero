function myFunction() {

    var checkBox = document.getElementById(".toggle .toggle-accent");

    var text = document.getElementById("text");
  

    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }