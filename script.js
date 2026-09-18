const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
});

const links = document.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const tujuan = link.getAttribute("href");

        if (tujuan && tujuan !== "#") {

            event.preventDefault();

            document.body.classList.add("keluar");

            setTimeout(function() {
                window.location.href = tujuan;
            }, 400);

        }

    });

});