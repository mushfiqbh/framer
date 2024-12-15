document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const iframe = document.getElementById('contentFrame');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            const url = this.getAttribute('data-url');
            iframe.src = url; // Set the iframe source to the clicked link's URL
        });
    });
});