$(document).ready(function(){
    set_temp()
    show_comment()
});

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
function set_temp(){
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
        data: {},
        success: function (response) {
            $('#temp').text(response['temp'])
        }
    })
}
function save_comment() {
    let name = $('#name').val()
    let comment = $('#comment').val()

    $.ajax({
        type: "POST",
        url: "/introduction_post",
        data: {'name_give':name, 'comment_give':comment},
        success: function (response) {
            alert(response["msg"])
            console.log(response)
            window.location.reload()
        }
    });
}
function show_comment() {
    $('#comment-list').empty()
    $.ajax({
        type: "GET",
        url: "/introduction_read",
        data: {},
        success: function (response) {
            console.log(response)
            let rows = response['comments']
            for (let i = 0; i < rows.length; i++) {
                let name = rows[i]['name'];
                let comment = rows[i]['comment'];

                let temp_html = `<div class="card">
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>${comment}</p>
                                            <footer class="blockquote-footer">${name}</footer>
                                        </blockquote>
                                    </div>
                                </div>`
                $('#comment-list').append(temp_html)
            }
        }
    });
}
    // </script>

