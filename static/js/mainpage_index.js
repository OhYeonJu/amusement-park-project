$(document).ready(function () {
    mainpage_show();
});

function mainpage_show() {
    $.ajax({
        type: 'GET',
        url: '/mainpagepost',
        data: {},
        success: function (response) {
            let rows = response['MP_postlists']
            for (let i = 0; i < 4; i++) {
                let name = rows[i]['name'];
                let park = rows[i]['park'];
                let ride = rows[i]['ride'];
                let write_title = rows[i]['write_title'];
                let img = rows[i]['img'];

                let temp_html =`<section>
                                    <div class="review_slot1_img"><img src="${img}"></div>
                                    <div class="review_slot1_txt">
                                        <div class="review_location"><span>장소 : ${park}</span></div>
                                        <div class="review_name">
                                        <div class="review_name_title">제목 : ${write_title}</div>
                                        <div class="review_name_like"><span>좋아요 1</span></div>
                                        </div>
                                        <div class="review_content"><span>내용 : ${ride}</span>
                                        </div>
                                        <div class="review_date"><span>작성자 : ${name}</span></div>
                                    </div>
                                </section>`

                $('#mainpage_reviewpost').append(temp_html)
            }
        }
    });
}


// 로그아웃함수 추가
function logout() {
    $.removeCookie('mytoken');
    alert('로그아웃!')
    location.replace("/")
}
