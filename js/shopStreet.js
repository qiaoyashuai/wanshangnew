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

})