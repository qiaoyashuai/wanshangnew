$(function() {
    // banner图
    // 焦点移入轮播
    $('.dots li').mouseover(function() {
        // 获取当前小圆点的索引下标
        index = $(this).index();
        // 当前的li淡入效果， 其他li淡出效果
        ChangeImg();
    });

    // 封装函数
    function ChangeImg() {
        $('.banner-img li').eq(index).fadeIn(600).siblings('li').fadeOut(200);
        // 给当前小圆点加上.active类， 其他li移除.active类
        $('.dots li').eq(index).addClass('active').siblings('li').removeClass('active');
    }

    // 自动播放banner图
    var index = 0;
    var Timer = setInterval(function() {
        index++;
        if (index == $('.banner-img li').length) {
            index = 0;
        }
        ChangeImg();
    }, 5000)

    // 鼠标移入时， 停止轮播
    $('.banner-img').mouseenter(function() {
        clearInterval(Timer);
    });

    // 鼠标移出时， 继续轮播
    $('.banner-img').mouseleave(function() {
        Timer = setInterval(function() {
            index++;
            if (index == $('.banner-img li').length) {
                index = 0;
            }
            ChangeImg();
        }, 5000)
    });


    // 热门推荐部分
    // 给头部的每个li添加鼠标移入事件
    $('.hot-title').find('li').mouseover(function() {
        // 给当前移入的对象添加.active类， 其他兄弟移除.active类；
        $(this).addClass('active').siblings().removeClass('active');
        // 获取当前li的索引 0 1 2 3
        index = $(this).index();
        // 获取每个ul对象 当前索引对应的对象 淡入效果，其他ul对象 淡出效果
        $('.hot-bd ul').eq(index).fadeIn(500).siblings('ul').fadeOut(500);
    });

    // 厨房电器部分 Tab标签切换栏
    $('.cf-lists').find('li').mouseenter(function() {
        $(this).addClass('active1').siblings().removeClass('active1');
        index = $(this).index();
        var oMyul = $(this).parents('.cf-hd').next('.cf-bd').find('.cf-r').find('.cf-items');
        oMyul.eq(index).fadeIn(500).siblings('ul').fadeOut(500);
    });

    // 侧边栏
    $(window).scroll(function() {
        var owTop = $(window).scrollTop();
        if (owTop > 400) {
            $('.slidebar').fadeIn(500);
        } else {
            $('.slidebar').fadeOut(200);
        }
        // 获取窗口的纯高度
        var winH = $(window).height();
        // console.log(winH);
        $('.floor').each(function(index) {
            if (owTop + winH - $(this).offset().top > winH*2/3) {
            	console.log(index)
                $('.slidebar li').removeClass('current')
                $('.slidebar li').eq(index).addClass('current');
            }
        })
    });

    // 点击侧边栏相对应的部分
    $('.slidebar li:not(.goTop)').click(function() {
        var Height = $(".floor").eq($(this).index()).offset().top;
        $('body,html').animate({
            'scrollTop': Height
        }, 500)
    });
    // 回到顶部
    $('.goTop').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500)
    })

    // 底部的轮播图
    // 点击右边的轮播 
    var count = 0;
    $('.next').click(function() {
        count++;
        $('.hd-dots li').eq(count).addClass('on').siblings('li').removeClass('on');
        if (count >= 2) {
            count = 2;
        }
        var oLeft = -count * 1200 + 'px';
        $('.shop-lists').css('transform', 'translateX(' + oLeft + ')');
    });

    // 点击左边的轮播 
    $('.prev').click(function() {
        if (count <= 0) {
            oLeft = 0;
            $('.shop-lists').css('transform', 'translateX(' + oLeft + ')');
        } else {
            count--;
            $('.hd-dots li').eq(count).addClass('on').siblings('li').removeClass('on');
            var oLeft = -count * 1200 + 'px';
            $('.shop-lists').css('transform', 'translateX(' + oLeft + ')');
        }
    });

    // 小圆点移入事件
    $('.hd-dots ul li').mouseenter(function() {
        count = $(this).index();
        var oLeft = -count * 1200 + 'px';
        $('.shop-lists').css('transform', 'translateX(' + oLeft + ')');
        $('.hd-dots li').eq(count).addClass('on').siblings('li').removeClass('on');
    })
})