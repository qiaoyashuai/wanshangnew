$(function() {
    // 地址功能
    $('.h_letter a').each(function(index, item) {
        $(this).mouseover(function() {
            var that = $(this);
            var oh = 0;
            $('.h_ul li').each(function() {
                ah += $(this).height();
                if ($(this).data('name') == that.data('letter')) {
                    $(this).prevAll().each(function() {
                        oh += $(this).height();
                    })
                }
                $('.h_ul').stop().animate({
                    'marginTop': -oh + 'px'
                }, 500)
                var ah = $('.h_ul').height() - $('.h_ul li:last').height();
                var ch = $('.h_bar').height() - $('.h_citybar').height();
                var yh = oh / ah * ch;
                $('.h_citybar').stop().animate({
                    top: yh + 'px'
                }, 500)
            })
        })
    });
    $('.h_citybar').mousedown(function() {
        $('.h_citybar').mousemove(function(e) {
            var mh = e.pageY - $('.h_bar').offset().top - $('.h_citybar').height() / 2;
            var maxh = $('.h_bar').height() - $('.h_citybar').height();
            if (mh <= 0) {
                mh = 0;
            } else if (mh >= maxh) {
                mh = maxh;
            }
            var ch = $('.h_bar').height() - $('.h_citybar').height();
            var ah = $('.h_ul').height() - $('.h_ul li:last').height();
            var bili = mh / ch * ah;
            $('.h_ul').stop().animate({
                'marginTop': -bili + 'px'
            }, 200)

            $('.h_citybar').css({
                'top': mh
            })
        })
        $('.h_citybar').mouseup(function() {
            $('.h_citybar').off('mousemove')
        })
        $('.h_citybar').mouseleave(function() {
            $('.h_citybar').off('mousemove')
        })
    });
    $('.dsc_choie').hover(function() {
        $('.dsc_choie').addClass('h_hover')
    }, function() {
        $('.dsc_choie').removeClass('h_hover');
        $('.h_ul').css('margin-top', 0);
        $('.h_citybar').css('top', 0);
    });
    // 网站导航
    var timerId = null;
    $('.dt').mouseenter(function() {
        console.log(123);
        clearTimeout(timerId);
        $('.dt').css({
            'background': '#fff',
            'width': 80,
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc',
        });
        $('.dd').show();
        $('.shopCart').hide();
        $('.line1').show();
    });
    $('.dt').mouseleave(function() {
        timerId = setTimeout(function() {
            $('.dt').css({
                'background': '',
                'width': 82,
                'border': 'none',
            });
            $('.dd').hide();
            $('.shopCart').show();
            $('.line1').hide();
        }, 100);
    });
    $('.dd').mouseenter(function() {
        clearTimeout(timerId);
        $('.dt').css({
            'background': '#fff',
            'width': 80,
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc',
        });
        $('.dd').show();
        $('.shopCart').hide();
        $('.line1').show();
    });
    $('.dd').mouseleave(function() {
        timerId = setTimeout(function() {
            $('.dt').css({
                'background': '',
                'width': 82,
                'border': 'none',
            });
            $('.dd').hide();
            $('.shopCart').show();
            $('.line1').hide();
        }, 100);
    });
    //购物车部分
    var timerId = null;
    $('.shopCart_con').mouseenter(function() {
        clearTimeout(timerId);
        $('.dorpdown_layer').show();
        $('.line2').show();
    });
    $('.shopCart_con').mouseleave(function() {
        timerId = setTimeout(function() {
            $('.dorpdown_layer').hide();
            $('.line2').hide();
        }, 100);
    });
    $('.dorpdown_layer').mouseenter(function() {
        clearTimeout(timerId);
        $('.dorpdown_layer').show();
        $('.line2').show();
    });
    $('.dorpdown_layer').mouseleave(function() {
        timerId = setTimeout(function() {
            $('.dorpdown_layer').hide();
            $('.line2').hide();
        }, 100);
    });
    //侧边栏
    $('#quick_links ul li').eq(0).hover(function() {
        $(this).css({
            'background': 'red',
        });
        $('.status_login').show();
    }, function() {
        $('#quick_links ul li').eq(0).css({
            'background': '',
        });
        $('.status_login').hide();
    });
    $('#shopCart').hover(function() {
        $(this).css('background', 'red');
        $('.cart_num').css({
            'background': '#fff',
            'color': 'red',
        })
    }, function() {
        $(this).css('background', '');
        $('.cart_num').css({
            'background': 'red',
            'color': '#fff',
        })
    });
    $('#shopCart').nextAll('li').each(function() {
        $(this).hover(function() {
            $(this).css('background', 'red');
            $(this).find('.mp_tooltip').show().animate({
                left: '-90',
            }, 300);
        }, function() {
            $(this).css('background', '');
            $(this).find('.mp_tooltip').hide().animate({
                left: '-121',
            });
        });
    });
    $('.quick_toggle ul li').eq(0).hover(function() {
        $(this).css('background', 'red');
        $(this).find('.mp_tooltip').show().animate({
            left: '-90',
        }, 100);
    }, function() {
        $(this).css('background', '');
        $(this).find('.mp_tooltip').hide().animate({
            left: '-121',
        });
    });
    $(window).scroll(function() {
        var wScrollTop = $(window).scrollTop();
        if (wScrollTop > 300) {
            $('.returnTop').fadeIn();
        } else {
            $('.returnTop').fadeOut();
        };
    });
    $('.returnTop').click(function() {
        $('body,html').animate({
            'scrollTop': 0,
        }, 300)
    });
    $('.returnTop').hover(function() {
        $(this).css('background', 'red');
    }, function() {
        $(this).css('background', '');
    });
});
// 侧边栏点击事件
$(function() {
    var i = 0;
    $('#shopCart').click(function() {
        if (i == 0) {
            $('.gaside .quick_links_wrapp').animate({
                right: '280px',
            }, 800);
            i = 1;
        } else {
            $('.gaside .quick_links_wrapp').animate({
                right: '0px',
            }, 800);
            i = 0;
        }
    })
});
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