const photo = document.getElementById("photo");
const thumbnail = document.querySelectorAll("#gallery > li > img");
for (let i = 0; i < thumbnail.length; i++)
    thumbnail[i].addEventListener("click", function () {
        photo.setAttribute("src", this.getAttribute("src"));
    });