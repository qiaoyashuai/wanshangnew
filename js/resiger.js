$(function () {
    $('main .resiger').find('label>.agree').click(function () {
        if ($(this).children('em.checked').hasClass('hide')) {

            $(this).children('em.checkNull').addClass('hide').siblings('em').removeClass('hide')

        } else {
            $(this).children('em.checked').addClass('hide').siblings('em').removeClass('hide')
        }
    })
})