
// 品牌扩展部分

$(function () {

    // 定义两个开关控制两个按钮不能相互点
    var flag = true;
    var num = true;
    // 下拉和上收箭头的显示
    $('.content-add .content-1').click(function () {

        if (flag) {
            if (!$('.bc-content').find('.down').hasClass('hide')) {
                // 撑开盒子高度
                $('.bc-content').addClass('bc-addHeight2');

                // 下拉和上收图标的切换
                $('.content-add').find('.down').addClass('hide')
                $('.content-add').find('.up').addClass('show')

                num = false

            } else {
                // 移除下拉的增加的属性
                $('.bc-content').removeClass('bc-addHeight2');
                $('.content-add').find('.down').removeClass('hide')
                $('.content-add').find('.up').removeClass('show')
                num = true
            }
        } else {
            alert('请收起全部多选')
        }
    })

    // 多选和收起的显示
    $('.content-add .content-2').click(function () {
        if (num) {
            // 判断当前按钮是收起还是多选状态
            if (!$('.bc-content').find('.add').hasClass('hide')) {

                // 清楚所有的选中
                $('.brand-sorts>li:first .sort').each(function () {
                    if ($(this).children('span.sort-null').hasClass('hide'))
                        $(this).children('span.sort-null').removeClass('hide').siblings('span.sort-right').hide();


                    var text = $(this).children('span:last').text();

                    // 给相同的品牌进行同步清楚选中
                    $('.brand-sorts>li .sort').each(function () {

                        if ($(this).children('span:last').text() == text) {
                            $(this).find('.sort-null').removeClass('hide').siblings('.sort-right').hide();
                        }
                    })


                    // 全部品牌遍历
                    // 保存当前点击取消后每一个选择框的选择状态
                    var arrBrand = []
                    $('.allBrand .brand-sorts>li:first').find('.sort').each(function () {
                        // 将当前选择框是否选择的状态添加进数组

                        // 如果为true为选中
                        arrBrand.push($(this).children('span.sort-null').hasClass('hide'))
                    })
                    // 判断全部选择框是否有选中的
                    // console.log(arrBrand)
                    var flag = arrBrand.some(function (value, index) {
                        if (value == true) {
                            return true;
                        }
                    })
                    // 所有选择框都没有选中的情况使得确认框隐藏
                    if (!flag) {
                        $('.brand-confirm').find('.sure').addClass('hide');
                    }

                })


                // 开启多选
                // 增加盒子高度
                $('.bc-content').addClass('bc-addHeight2');
                // 切换图标
                $('.content-add').find('.add').addClass('hide')
                $('.content-add').find('.minus').addClass('show')
                flag = false

                // 显示多选的内容
                $('.content-img').find('.allBrand').removeClass('hide')
                // 一个在多选后显示的其他操作

                // 点击取消按钮后
                // 操作同点击收起按钮操作

                $('.brand-confirm .concel').click(function () {
                    $('.bc-content').removeClass('bc-addHeight2');
                    $('.content-add').find('.add').removeClass('hide')
                    $('.content-add').find('.minus').removeClass('show')
                    flag = true
                    $('.content-img').find('.allBrand').addClass('hide')

                    // 清除所有选中的选择框
                })
            } else {
                $('.bc-content').removeClass('bc-addHeight2');
                $('.content-add').find('.add').removeClass('hide')
                $('.content-add').find('.minus').removeClass('show')
                flag = true

                $('.content-img').find('.allBrand').addClass('hide')
            }
        } else {
            alert('请收起全部单选')
        }
    })

    brandSort()
    // 点击多选后执行的操作
    function brandSort () {
        // 点击品牌选项进行选中
        // console.log($('.brand-sorts>li .sort').length);
        $('.brand-sorts>li .sort').each(function () {
            $(this).on("click", function () {
                // console.log($(this).html());
                // console.log(111);
                if (!$(this).children('.sort-null').hasClass('hide')) {
                    // 复选框选中
                    $(this).children('span:first').addClass('hide').siblings('.sort-right').show();

                    // 获取选中当前样式的文本
                    var text = $(this).children('span:last').text();

                    // 给相同的品牌进行同步选中
                    $('.brand-sorts>li .sort').each(function () {
                        // console.log($(this))
                        if ($(this).children('span:last').text() == text) {
                            $(this).find('.sort-null').addClass('hide').siblings('.sort-right').show();
                        }
                    })
                    // 下方确认框显示出来
                    $('.brand-confirm').find('.sure').removeClass('hide');

                } else {
                    // 复选框选中清除
                    $(this).children('span:first').removeClass('hide').siblings('.sort-right').hide();


                    var text = $(this).children('span:last').text();

                    // 给相同的品牌进行同步清楚选中
                    $('.brand-sorts>li .sort').each(function () {

                        if ($(this).children('span:last').text() == text) {
                            $(this).find('.sort-null').removeClass('hide').siblings('.sort-right').hide();
                        }
                    })


                    // 全部品牌遍历
                    // 保存当前点击取消后每一个选择框的选择状态
                    var arrBrand = []
                    $('.allBrand .brand-sorts>li:first').find('.sort').each(function () {
                        // 将当前选择框是否选择的状态添加进数组

                        // 如果为true为选中
                        arrBrand.push($(this).children('span.sort-null').hasClass('hide'))
                    })
                    // 判断全部选择框是否有选中的
                    // console.log(arrBrand)
                    var flag = arrBrand.some(function (value, index) {
                        if (value == true) {
                            return true;
                        }
                    })
                    // 所有选择框都没有选中的情况使得确认框隐藏
                    if (!flag) {
                        $('.brand-confirm').find('.sure').addClass('hide');
                    }
                }
            })


        })

        // 在字母滑动过程中切换对应的品牌
        $('.allBrand .all_a-z>ul>li').each(function () {
            $(this).mouseenter(function () {
                // a-z的显示
                $(this).addClass('active').siblings('li').removeClass('active')

                // 对应内容的切换选中
                $('.allBrand .brand-sorts>li').eq($(this).index()).removeClass('hide').siblings('li').addClass('hide')
                // 判断该字母对应的页面是否为空
                if ($('.allBrand .brand-sorts>li').eq($(this).index()).hasClass('brand-null')) {
                    //    改变整个盒子的高度
                    $(this).parents('.bc-content').addClass('bc-addHeight3');
                    // 改变所在盒子的高度
                    $(this).parents('.allBrand').find('.brand-sorts').addClass('brand-space');
                    // 改变自身高度
                    $(this).parents('.allBrand').addClass('allBrand2');
                } else {
                    // 清除修改的各个高度
                    $(this).parents('.bc-content').removeClass('bc-addHeight3');
                    $(this).parents('.allBrand').find('.brand-sorts').removeClass('brand-space');
                    $(this).parents('.allBrand').removeClass('allBrand2');
                }
            })
        })

    }

})



// 过滤模块

$(function () {
    // 上升和下降部分的切换
    $('.filter-style a').each(function () {
        $(this).click(function () {
            // 判断是否上升有隐藏
            if ($(this).find('span.filter-up').hasClass('hide')) {
                $(this).find('span:last').hide().siblings('span.filter-up').removeClass('hide')
            } else {
                $(this).find('span:last').show().siblings('span.filter-up').addClass('hide')
            }
        })
    })

    // 区间和选择框的调试
    // 价格区间绑定焦点事件
    $('.filter-area .filter-priceArea input').each(function () {
        
        $(this).on('focus', function () {
            $(this).siblings('.filter-confirm').removeClass('hide')
        })
        $(this).on('blur', function () {
            $(this).siblings('.filter-confirm').addClass('hide')
        })

    })

    // 过滤中的选择框的选中和取消
    $('.filter-other .fliter-item').each(function(){
        $(this).find('label').click(function(){
            if($(this).find('span.check').hasClass('hide')){
                $(this).find('span.checkNull').addClass('hide').siblings('span.check').removeClass('hide');
            }else{
                $(this).find('span.checkNull').removeClass('hide').siblings('span.check').addClass('hide');
            }
        })
    })

})

// 二级导航
$(function(){
    // 商品导航的显示和隐藏
    $('.bc-nav').find('.nav-sorts').hover(function(){
        $(this).children('.sorts-content').removeClass('hide')
    },function(){
        $(this).children('.sorts-content').addClass('hide')
    })

    $('.sorts-content').find('ul>li').hover(function(){
        $(this).addClass('active').siblings('li').removeClass('active')
        
        $(this).children('.sorts-tab').removeClass('hide')
    },function(){
        $(this).children('.sorts-tab').addClass('hide')
    })

})


// 产品模块
$(function () {
    // 小图片移入大图片切换
    $('.product-left .pro-content .pro-slide>ul>li').each(function () {
        $(this).mouseenter(function () {
            var minSrc = $(this).find('img').prop('src');

            $(this).parents('.pro-slide').siblings('.pro-img').find('a>img').prop('src', minSrc)
        })


    })

    // 选择框的选中
    $('.product-left .pro-content .pro-oprate').each(function () {

        $(this).find('a>label').click(function () {
            console.log($(this).find('span.check').hasClass('hide'));
            if ($(this).find('span.check').hasClass('hide')) {
                $(this).find('span.check').removeClass('hide').siblings('span.checked').hide()
            } else {
                $(this).find('span.check').addClass('hide').siblings('span.checked').show()
            }
        })
    })

    // 右边推荐的按钮效果
    $('.bc-product .pro-btn>span.btn').click(function () {
        // 判断向左还是向右
        // 向右
        if ($(this).hasClass('check')) {
            // 移动按钮
            $(this).parents('.pro-btnBox').animate({
                right: '-32px'
            })
            // 按钮换箭头
            $(this).hide().siblings('span').removeClass('hide')
            // 右边的推荐宽度减到0
            $('.product-right').animate({
                width: 0
            }, function () {
                // 隐藏推荐框
                $('.product-right').hide()
                // 左边商品栏目填满
                $('.product-left').css({
                    width: '100%'
                })
                // 改变左边栏目宽度
                $('.bc-product').css({
                    height: '1420px'
                })
            })
        } else {
            // 向左滑动
            $('.bc-product').css({
                height: '1900px'
            })
            
            $('.product-left').animate({
                width: '83%'
            }, function () {
                $('.bc-product .pro-btn>span.checked').parents('.pro-btnBox').animate({
                    right:'199px'
                })
                $('.bc-product .pro-btn>span.checked').addClass('hide').siblings('span').show()
                $('.product-right').show().animate({
                    width:'230px'
                })
                
            })


            
        }
    })

})
