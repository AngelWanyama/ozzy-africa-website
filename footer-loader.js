// Load footer.html into the placeholder on every page
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
  });
