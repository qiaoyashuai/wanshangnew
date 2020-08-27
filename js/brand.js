// $(function() {
//     //   回到顶部
//     $(window).scroll(function() {
//         var oSrcollTop = $(window).scrollTop()
//             // 检测滚动条偏移 显示隐藏
//         if (oSrcollTop > 300) {
//             $(".rTop").css({
//                 display: "block"
//             })
//         } else {
//             $(".rTop").css({
//                 display: "none"
//             })
//         }
//         var windowH = $(window).height(); //设备可见区域高度
//         var documentH = $(document).height(); //整个网页的高度（包括未显示的部分）
//         var scrollH = $(window).scrollTop(); //滚动条滚动上去的高度
//         //或者  scrollH = $(document).scrollTop();   
//         if (windowH + scrollH >= documentH) {
//             alert("下面没有了哦! 亲!");
//         }
//     })

//     //   回到顶部
//     $(".rTop").click(function() {
//         $("body,html").animate({
//             "scrollTop": 0
//         }, 500)
//     })

// })
$(function() {
    //   回到顶部
    var flag = 0;
    $(window).scroll(function() {
        var oSrcollTop = $(window).scrollTop()
            // 检测滚动条偏移 显示隐藏
        if (oSrcollTop > 300) {
            $(".rTop").css({
                display: "block"
            })
        } else {
            $(".rTop").css({
                display: "none"
            })
        }

        var windowH = $(window).height(); //设备可见区域高度
        var documentH = $(document).height(); //整个网页的高度（包括未显示的部分）
        var scrollH = $(window).scrollTop(); //滚动条滚动上去的高度
        //或者  scrollH = $(document).scrollTop();   
        if (scrollH + windowH + 200 > documentH) {
            $('.img-items li').each(function() {
                if ($(this).hasClass('con')) {
                    $(this).show();
                } else {
                    $(this).addClass('con');
                    flag++;
                    if (flag == 4) {
                        flag = 0;
                        return false;
                    }
                }
            })
        }
    })

    //   回到顶部
    $(".rTop").click(function() {
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
    })




})