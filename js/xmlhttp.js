// handle button clicks
// when the button is clicked, load content into #page_content from the associated /file/ resource

document.getElementById("page1").addEventListener("click", function () {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page_content").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "./files/page1.html");
  xhttp.send();
});

document.getElementById("page2").addEventListener("click", function () {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page_content").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "./files/page2.html");
  xhttp.send();
});

document.getElementById("page3").addEventListener("click", function () {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page_content").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "./files/page3.html");
  xhttp.send();
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("page_content").innerHTML = "Click a button to load new content";
});