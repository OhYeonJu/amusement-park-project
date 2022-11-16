function login() {
    $.ajax({
        type: "POST",
        url: "/api/login",
        data: {id_give: $('#userid').val(), pw_give: $('#userpw').val()},
        success: function (response) {
            if (response['result'] == 'success') {
                // 로그인이 정상적으로 되면, 토큰을 받아옵니다.
                // 이 토큰을 mytoken이라는 키 값으로 쿠키에 저장합니다.
                $.cookie('mytoken', response['token']);

                alert('로그인 완료!')
                location.replace("/amusementpark")
            } else {
                // 로그인이 안되면 에러메시지를 띄웁니다.
                alert(response['msg'])
            }
        }
    })
}

// 간단한 회원가입 함수입니다.
// 아이디, 비밀번호, 닉네임을 받아 DB에 저장합니다.
var id_check = 0;

function register() {
    let signup_userpw = $('#signup_userpw').val()
    let signup_userpw_check = $('#signup_userpw_check').val()
    if (id_check == 0) {
        alert('ID CHECK를 해주세요.')
    } else if (signup_userpw != signup_userpw_check) {
        alert('pw가 다릅니다.')
    } else {
        $.ajax({
            type: "POST",
            url: "/api/register",
            data: {
                id_give: $('#signup_userid').val(),
                name_give: $('#signup_username').val(),
                pw_give: $('#signup_userpw').val()
            },
            success: function (response) {
                if (response['result'] == 'success') {
                    alert('회원가입이 완료되었습니다.')
                    location.replace("/")
                } else {
                    alert(response['msg'])
                }
            }
        })
    }
}


function idCheck() {
    let signup_userid_check = $('#signup_userid').val()
    console.log(signup_userid_check)

    $.ajax({
        type: "GET",
        url: "/api/register/id_check",
        data: {
            signup_userid_give: signup_userid_check
        },
        success: function (response) {
            if (response['status'] == 'success') {
                alert(response['msg'])
                id_check = 1;
            } else {
                alert(response['msg'])
                id_check = 0;
            }
        }
    })
}


$(function () {
    $("#login_btn").click(function () {
        $(".login_modal").modal("show");
        $(".login_modal").css("padding-right", 0);
        $("body").css("padding-right", 0)
    });

    $("#login_modal_close").click(function () {
        $(".login_modal").modal("hide");
    });

    $("#login_close_btn").click(function () {
        $(".login_modal").modal("hide");
    });

    $("#sign_up_btn").click(function () {
        $(".sign_up_modal").modal("show");
        $(".sign_up_modal").css("padding-right", 0);
        $("body").css("padding-right", 0)
    });

    $("#sign_up_modal_close").click(function () {
        $(".sign_up_modal").modal("hide");
    });

    $("#sign_up_close_btn").click(function () {
        $(".sign_up_modal").modal("hide");
    });

});