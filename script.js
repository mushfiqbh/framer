document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const redirectLink = document.getElementById("redirect");
  const iframe = document.getElementById("contentFrame");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default anchor click behavior
      const url = this.getAttribute("data-url");
      redirectLink.setAttribute("href", url);
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.setAttribute("class", "active");
      iframe.src = url; // Set the iframe source to the clicked link's URL
    });
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
