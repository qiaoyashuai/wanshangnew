// 轮播图
$(function() {
    var index = 0;
    $(".next").mouseover(function() {
            index++
            if (index > $(".banner_one_img li").length - 1) {
                index = 0
            }
            changeImg()
        })
        //下方条形细框
    $(".slips li").mouseover(function() {
        index = $(this).index()
        changeImg()
    })

    function changeImg() {
        $(".banner_one_img li").eq(index).fadeIn(600).siblings("li").fadeOut(200)
        $(".slips li").eq(index).addClass("active").siblings("li").removeClass("active")
    }
    var timer = setInterval(function() {
        $(".nextet").mouseover()
    }, 3000)
    $(".banner_one").mouseenter(function() {
        clearInterval(timer)
    })
    $(".banner_one").mouseleave(function() {
        timer = setInterval(function() {
            $(".next").mouseover()
        }, 3000)
    })
})

// table侧边栏
$(function() {
    var timer = null;
    $(".content_left_show").mouseover(function() {
        clearTimeout(timer);
        var index = $(this).index()
        $(this).parents(".content").find(".content_middle").eq(index).css({ "display": "block", "top": -90 * index + "px" })
        $(this).parents(".content").find(".content_middle").eq(index - 4).css("display", "none")
    })
    $(".content_left_show").mouseout(function() {
        $(".content_middle").css("display", "none")
    })
})

// 中间table切换
$(function() {
    $('.dress').find('.dress_right_bottom:first').css("display", "block")
    $(".table_one ul li").mouseover(function() {
        var index = $(this).index()
        $(".table_one ul li").addClass("active").siblings("li").removeClass("active")
        $(this).addClass("active").siblings("li").removeClass("active")
        $(this).parents('.dress').find('.dress_right_bottom').eq(index).fadeIn(200).siblings(".dress_right_bottom").hide().fadeOut(100)
    })
})

//轮播图
$(function() {
        var i = 0

        //按钮轮播
        //点击右边按钮
        $(".next").click(function() {
            if (i < $(".slips_top ul li").length - 1) {
                $(".banner_two ul").animate({
                    left: "-=1200px"
                }, 500)
                i++
                $(".slips_top ul li").eq(i).addClass("on").siblings("li").removeClass("on")
            }
        })

        // 点击左边
        $(".prev").click(function() {
            if (i > 0) {
                $(".banner_two ul").animate({
                    left: "+=1200px"
                }, 500)
                i--
                $(".slips_top ul li").eq(i).addClass("on").siblings("li").removeClass("on")
            }
        })

        //圆点轮播
        var j = 0;
        $(".slips_top ul li").mouseover(function() {
            var set
            var index = $(this).index()
            $(this).addClass("on").siblings("li").removeClass("on")
            $(".banner_two ul").stop().animate({
                left: -1200 * index + "px"
            }, 500)
            i = index
        })
    })
    // 侧边导航

$(function() {
    $(window).scroll(function() {
        var oSrcollTop = $(window).scrollTop()
        if (oSrcollTop > 400) {
            $(".aside").fadeIn(500)
        } else {
            $(".aside").fadeOut(200)
        }

        //定位楼层导航
        var winH = $(window).height()
        $(".dress").each(function() {
            if (winH + oSrcollTop - $(this).offset().top > winH / 1.5) {
                $(".aside_table li").removeClass("active")
                $(".aside_table li").eq($(this).index()).addClass("active")
            }
        })
    })

    //点击侧边栏

    $(".aside_table li:not(.gotop)").click(function() {
        console.log($(this).index())
        var oH = $(".dress").eq($(this).index()).offset().top - 100
        $("body,html").animate({
            "scrollTop": oH
        }, 500)
    })

    $(".aside_table li.gotop").click(function() {
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
    });
    $('.banner_two').hover(function() {
        console.log(123);
        $('.banner_two .prev').show();
        $('.banner_two .next').show();
    }, function() {
        console.log(456);
        $('.banner_two .prev').hide();
        $('.banner_two .next').hide();
    })
})