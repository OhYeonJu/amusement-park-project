
//post_up 스크립트

        $(document).ready(function () {
            content_show();
          });


     function save_content() {
            let park = $('#park').val()
            let write_title = $('#write_title').val()
            let name = $('#name').val()
            let ride = $('#ride').val()
            let content = $('#content').val()
            let img = $('#img').val()
          if (park === "놀이공원을 선택해주세요." || write_title == "" || name == "" || ride == "" || img == "" || content == "") {
                 alert("빈칸을 채워주세요")
            }else {
                $.ajax({
                type: "POST",
                url: "/post_up",
                data: {'park_give':park, 'write_title_give':write_title, 'name_give':name, 'content_give': content, 'ride_give':ride, 'img_give': img},
                success: function (response) {
                    alert(response["msg"])
                    window.location.replace("/post")
                }})
        }};

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
                        let content = rows[i]['content'];
                        let img = rows[i]['img'];
                        let like = rows[i]['like'];


                        let temp_html = `<div class="review_post" >
                                               <div class="img"><img src="${img}" alt="이미지"></div>
                                                <div class="content">
                                                    <p class="like"><span>놀이공원명: ${park}</span></p><p class="like"><span>좋아요: ${like}</span></p>
                                                    <p><span>놀이기구:</span> ${ride}</p>
                                                    <p><span>제목:</span> ${write_title}</p>
                                                    <p><span>내용:</span> ${content}</p>
                                                    <p><span>작성자:</span> ${name}</p>
                                                  <span class="button"><button type="button" class="btn btn-outline-danger" onclick="postLike(${num}) ">좋아요</button>
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

        //실패한 좋아요 구현 실패의 흔적들
              // function postLike(num) {
                //     console.log(num)
             //     $.ajax({
             //         type: 'post',
             //         url: '/post/post_show',
             //         data: {num_give : num},
             //             success: function (response) {
                //                 alert(response['msg']);
                //                 window.location.reload()
                //             }
                //         });
                //     }




