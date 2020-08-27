window.onload = function() {
    var header_one = document.querySelector(".header_one");
    var header_two = document.querySelector(".header_two");
    var header_three = document.querySelector(".header_three");
    var turn_one = document.querySelector(".turn_one");
    var turn_two = document.querySelector(".turn_two");
    var turn_three = document.querySelector(".turn_three");
    var header_one_slip = document.querySelector(".header_one_slip");
    var header_two_slip = document.querySelector(".header_two_slip");
    // 鼠标进入第一个小盒事件

    header_one.onmouseover = function() {
        turn_one.style.display = "block";
        header_one_slip.style.display = "block";
        header_two.style.borderBottom = "0px";
        header_one.style.border = "1px solid red";
        header_one.style.borderBottom = "0px";
    }

    // 离开
    header_one.onmouseout = function() {
        turn_one.style.display = "none";
        header_one_slip.style.display = "none";
        header_one.style.border = "1px solid #555555";
        header_two.style.borderBottom = "1px solid #555555";
    }

    // 鼠标进入第二个小盒子事件
    header_two.onmouseover = function() {
        turn_two.style.display = "block";
        header_two_slip.style.display = "block";
        header_three.style.borderBottom = "0px";
        header_two.style.border = "1px solid red";
        header_two.style.borderBottom = "0px";
    }

    header_two.onmouseout = function() {
        turn_two.style.display = "none";
        header_two_slip.style.display = "none";
        header_two.style.border = "1px solid #555555";
        header_three.style.borderBottom = "1px solid #555555";
    }

    //放大镜事件
    var context = document.querySelector('.content');
    var oMin = document.querySelector('.min');
    var oMax = document.querySelector('.max');
    var oMask = document.querySelector('.mask');
    var oMaxli = document.querySelectorAll('.min ul li');
    var oMaxImg = document.querySelectorAll('.max ul li');
    oMin.onmouseover = function() {
        // 鼠标经过小盒子,遮罩层出现,大盒子出现
        oMax.style.display = 'block';
        oMask.style.display = 'block';

    };

    // 小盒子鼠标over事件

    for (var i = 0; i < oMaxli.length; i++) {

        oMaxli[i].index = i;
        oMaxli[i].onmouseover = (function() {
            i = this.index;
            console.log(i)
                // 遮罩层跟随鼠标移动
            oMin.onmousemove = function(e) {

                // 获取光标在小盒子上的坐标
                var minX = e.pageX - oMin.offsetLeft - 150;
                var minY = e.pageY - oMin.offsetTop - 200;
                // 设置光标在遮罩层的中间
                minX = minX - oMask.offsetWidth / 2;
                minY = minY - oMask.offsetHeight / 2;
                // 获取移动的最大距离
                var maxDisWidth = oMin.offsetWidth - oMask.offsetWidth;
                var maxDisHeight = oMin.offsetHeight - oMask.offsetHeight;
                // 判断最大距离
                if (minX > maxDisWidth) {
                    minX = maxDisWidth;
                } else if (minX <= 0) {
                    minX = 0;
                };

                if (minY > maxDisHeight) {
                    minY = maxDisHeight;
                } else if (minY <= 0) {
                    minY = 0;
                };
                // 设置遮罩层的位置
                oMask.style.left = minX + 'px';
                oMask.style.top = minY + 'px';
                // 大图片移动的距离=遮罩层移动的距离/遮罩层移动的最大距离*大图片移动的最大距离
                // 比例
                // 遮罩层移动的距离/遮罩层移动的最大距离
                var ratioX = minX / maxDisWidth;
                var ratioY = minY / maxDisHeight;

                // 计算大图片移动的距离
                oMaxImg[i].style.left = -ratioX * (oMaxImg[i].offsetWidth - oMax.offsetWidth) + 'px';
                oMaxImg[i].style.top = -ratioY * (oMaxImg[i].offsetHeight - oMax.offsetHeight) + 'px';
            }
        })

    }
    oMin.onmouseout = function() {
        oMax.style.display = 'none';
        oMask.style.display = 'none';
    };

    // 移入事件

    $(".min_bottom_middle ul li").mouseover(function() {
        $(this).addClass("li_one").siblings("li").removeClass("li_one");
        $(".min ul li").eq($(this).index()).addClass("minImg").siblings("li").removeClass("minImg");
    })
    $(".min ul li").mouseover(function() {
            // $(".min ul li").css("display", "block");
            $(".max ul li").eq($(this).index()).addClass("maxImg").siblings("li").removeClass("maxImg");
        })
        // 点击事件
        //点击右边按钮
    var j = 0;
    $(".next").click(function() {
        if (j < $(".min_bottom_middle ul li").length - 5) {
            $(".min_bottom_middle ul").animate({
                left: "-=67px"
            }, 300)
            j++
        }
    })

    // 点击左边
    $(".prve").click(function() {
        if (j > 0) {
            $(".min_bottom_middle ul").animate({
                left: "+=67px"
            }, 300)
            j--
        }
    })

}
$(function() {
    // 商品导航的显示和隐藏
    $('.bc-nav').find('.nav-sorts').hover(function() {
        $(this).children('.sorts-content').removeClass('hide')
    }, function() {
        $(this).children('.sorts-content').addClass('hide')
    })

    $('.sorts-content').find('ul>li').hover(function() {
        $(this).addClass('active').siblings('li').removeClass('active')

        $(this).children('.sorts-tab').removeClass('hide')
    }, function() {
        $(this).children('.sorts-tab').addClass('hide')
    })

});
$(function() {
    $('.btn_append').click(function() {
        $('.loading_mask').show();
        $('.loading').show();
    });
    $('.loading_x').click(function() {
        $('.loading_mask').hide();
        $('.loading').hide();
    });
});