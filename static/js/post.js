//post_up 스크립트

$(document).ready(function () {
    content_show();
});


function save_content() {
    let park = $('#park').val()
    let write_title = $('#write_title').val()
    let name = $('#name').val()
    let ride = $('#ride').val()
    let img = $('#img').val()
    $.ajax({
        type: "POST",
        url: "/post_up",
        data: {
            'park_give': park,
            'write_title_give': write_title,
            'name_give': name,
            'ride_give': ride,
            'img_give': img
        },
        success: function (response) {
            alert(response["msg"])
            window.location.replace("/post")
        }
    })
};

function content_show() {
    $.ajax({
        type: 'GET',
        url: '/post/post_show',
        data: {},
        success: function (response) {
            let rows = response['postUpLists']
            for (let i = 0; i < rows.length; i++) {
                let park = rows[i]['park'];
                let write_title = rows[i]['write_title'];
                let name = rows[i]['name'];
                let ride = rows[i]['ride'];
                let num = rows[i]['num'];
                let img = rows[i]['img'];


                let temp_html = `<div class="review_post" >
                                               <div class="img"><img src="${img}" alt="이미지"></div>
                                                <div class="content">
                                                    <p class="like"><span>놀이공원명: ${park}</span></p><p class="like"><span>좋아요:0</span></p>
                                                    <p><span>제목:</span> ${write_title}</p>
                                                    <p><span>내용:</span> ${ride}</p>
                                                    <p><span>작성자:</span> ${name}</p>
                                                  <span class="button"><button type="button" class="btn btn-outline-danger" onclick=" ">좋아요</button>
                                                  <button type="button" class="btn btn-outline-success" onclick="delet(${num})">삭제</button></span>
                                                </div>
                                            </div>`
                $('#review_show').append(temp_html)
            }
        }
    });

};

function delet(num) {
    $.ajax({
        type: "POST",
        url: "/post/delete",
        data: {num_give: num},
        success: function (response) {
            alert(response["msg"])
            window.location.reload()
        }
    })
};

//로그아웃함수 추가
function logout() {
    $.removeCookie('mytoken');
    alert('로그아웃!')
    location.replace("/")
}





