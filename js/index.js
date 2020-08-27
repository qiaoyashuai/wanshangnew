// 点击叉号头部图片笑消失
$(function() {
        $('.top .topimg span').click(function() {
                $('.top').css('display', 'none');
            })
            // 当拥有active类名时添加元素span

    })
    // 淡入淡出轮播图轮播图
$(function() {
        var len = $('.bannerbox>ul li').length;
        var index = 0;
        // 创建开关 当动画执行完才可以点击生效
        var flage = true;
        $('.bannerbox').click(function() {
                if (flage) {
                    flage = false;
                    index++;
                    if (index >= 3) {
                        index = 0;
                    }
                    // 调用动画实现淡入淡出
                    changeImg();
                }
            })
            // 创建一个函数实现动画
        function changeImg() {
            $('.bannerbox>ul li').eq(index).stop().fadeIn(600, function() {
                flage = true;
            }).siblings('li').fadeOut(200);
            $(".bannerboxbottom li").eq(index).stop().addClass("active").siblings("li").removeClass("active")
        }


        // 添加焦点轮播 当点击小圆点时跳转页面
        //    给小圆点添加自定义属性
        $(".bannerboxbottom li").click(function() {
            event.stopPropagation();
            index = $(this).index()
            changeImg()
        })
        console.log($('.bannerbox'));
        // 创建定时器
        var dingshiqi = setInterval(function() {
            $('.bannerbox').click()
        }, 2000);
        // 当鼠标放上停止定时器
        $('.bannerbox').mouseenter(function() {
                clearInterval(dingshiqi);

            })
            // 鼠标离开时定时器恢复
        $('.bannerbox').mouseleave(function() {
            dingshiqi = setInterval(function() {
                $('.bannerbox').click()
            }, 2000);
        })
    })
    // 第一个轮播图结束
    // 第二个轮播图
$(function() {
        var flag = true;
        // 点击下一个按钮则向左移动图片
        $('.next').click(function() {
                if (flag) {
                    flag = false;
                    $('.tempwrap ul').animate({
                        left: '-238px'
                    }, 800, function() {
                        flag = true;
                        $('.tempwrap ul li').eq(0).appendTo($('.tempwrap ul'))
                        $('.tempwrap ul').css('left', 0)
                    })
                }

            })
            // 当点击上一个按钮时向右移动图片
        var len = $('.tempwrap ul li').length - 1;
        $('.prve').click(function() {
                if (flag) {
                    flag = false;
                    $('.tempwrap ul li').eq(len).prependTo($('.tempwrap ul'));
                    $('.tempwrap ul').css('left', '-238px')
                    console.log(111);
                    $('.tempwrap ul').animate({
                        left: 0,
                    }, 800, function() {
                        flag = true;
                    })
                }
            })
            // 设置定时器
        var dingshiqi2 = setInterval(function() {
            $('.next').click();
        }, 1500);
        $('.tempwrap ul').mouseenter(function() {
            clearInterval(dingshiqi2);
        })
        $('.tempwrap ul').mouseleave(function() {
            dingshiqi2 = setInterval(function() {
                $('.next').click();
            }, 1500)
        })
    })
    // 第二个轮播图结束
    // 头部固定导航栏
var ofloor = document.getElementsByClassName('floor');
$(function() {
    $(window).scroll(function() {
            // 获得浏览器滚动条卷进去的距离
            var scrollTop = $(window).scrollTop();
            // 当超过某一距离时头部固定导航栏出现
            if (scrollTop >= 240) {
                $('.fixtopnbox').slideDown(500);

            } else {
                $('.fixtopnbox').slideUp(300);
            }
            // 当超过某一距离时侧边固定导航栏出现
            if (scrollTop >= 500) {
                $('.slide').fadeIn(500);
            } else {
                $('.slide').fadeOut(500);
            }
            // 侧边固定导航栏
            // 获得浏览器的高
            var oH = $(window).height();

            // console.log(ofloor);
            // console.log($(ofloor));
            $(ofloor).each(function(index) {
                if (oH + scrollTop - $(this).offset().top > oH * 3 / 4) {
                    $(".slide li").removeClass("active")
                    $(".slide li").eq(index).addClass("active");
                    // 三角
                    $(".sanjiao").css('display', 'none');
                    $(".active .sanjiao").css('display', 'block');
                }
            })

        })
        // 点击侧边栏跳转页面
    $(".slide li:not(.gtop)").click(function() {
            var oH = $(".floor").eq($(this).index()).offset().top - 100
            $("body,html").animate({
                "scrollTop": oH
            }, 500);
            $(".slide li").removeClass("active")
            $(".slide li").eq(index).addClass("active");
            // 三角
            $(".sanjiao").css('display', 'none');
            $(".active .sanjiao").css('display', 'block');
        })
        // 点击回到顶部跳转到顶部
    $(".gtop").click(function() {
        $("body,html").animate({
            "scrollTop": 0
        }, 500);
        $(".slide li").removeClass("active")
        $(".slide li").eq(index).addClass("active");
    })
})
$(function() {

        $('.noticetop a').eq(0).mouseenter(function() {
            $('.noticetop a').css('color', '#666');
            $(this).css('color', 'red');
            $('.noticetop+ul').html(function() {
                var value = '  <li>服务店突破2000多家</li>' + ' <li>我们成为中国最大家电零售B2B2C系统</li>' + '<li>三大国际腕表品牌签约</li>';
                return value;
            })

        })
        $('.noticetop a').eq(1).mouseenter(function() {
            $('.noticetop a').css('color', '#666');
            $(this).css('color', 'red');
            $('.noticetop+ul').html(function() {
                var value = '  <li>春季家装季，家电买一送一</li>' + ' <li>抢百元优惠券，享4.22%活期</li>' + '<li>Macbook最高返50000消费豆！</li>';
                return value;
            })
        })
    })
    // 模态框
$(function() {
    $('#quick_links ul li:not(#shopCart)').click(function() {
        $('.modal').css("display", 'block')
    })
    $('.modalcenter h2 a').click(function() {
        $('.modal').css("display", 'none')
    })
    $('.checkbox').mouseenter(function() {
        $('.bianse').css('color', 'red')
        $('.bianse i').css('color', 'red')
        var flag = true;
        var i = 0;
        $('.checkbox').click(function() {
            if (i == 0) {
                $('.bianse i').removeClass();
                $('.bianse i').addClass('iconfont icon-fangxingxuanzhong')
                $('.bianse').css('color', 'red')
                $('.bianse i').css('color', 'red');
                flag = false;
                i = 1;
            } else {
                $('.bianse i').removeClass();
                $('.bianse i').addClass('iconfont icon-fuxuankuang')
                $('.bianse').css('color', '#999')
                $('.bianse i').css('color', '#999');
                flag = false;
                i = 0;
            }

        });
        $('.checkbox').mouseleave(function() {
            if (flag) {
                $('.bianse').css('color', '#999')
                $('.bianse i').css('color', '#999');

            }
        })
    })

})