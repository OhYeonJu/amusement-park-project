const photo = document.getElementById("photo");
const thumbnail = document.querySelectorAll("#gallery > li > img");
for (let i = 0; i < thumbnail.length; i++){
    thumbnail[i].addEventListener("click", function () {
        photo.setAttribute("src", this.getAttribute("src"));
    })
};

// 로그아웃 함수
function logout() {
    $.removeCookie('mytoken');
    alert('로그아웃!')
    location.replace("/")
}

