// 로그아웃함수 추가
function logout() {
    $.removeCookie('mytoken');
    alert('로그아웃!')
    location.replace("/")
}