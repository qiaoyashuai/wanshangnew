$(function() {
    // 轮播图
    $('.carousel').carousel({
        interval: 2000
    });
    // 招牌推荐
});
window.onload = function() {
    // 秒杀倒计时
    function gettime(time, ele) {
        var now = +new Date();
        var timer = +new Date(time);
        var seconds = (timer - now) / 1000;
        var dateDay = parseInt(seconds / 60 / 60 / 24);
        dateDay = dateDay < 10 ? '0' + dateDay : dateDay;
        var dateHours = parseInt(seconds / 60 / 60 % 24);
        dateHours = dateHours < 10 ? '0' + dateHours : dateHours;
        var dateMinutes = parseInt(seconds / 60 % 60);
        dateMinutes = dateMinutes < 10 ? '0' + dateMinutes : dateMinutes;
        var dateSeconds = parseInt(seconds % 60);
        dateSeconds = dateSeconds < 10 ? '0' + dateSeconds : dateSeconds;
        ele.innerHTML = '倒计时:' + dateDay + '天' + dateHours + ':' + dateMinutes + ':' + dateSeconds;
    }
    var oTime = document.querySelectorAll('.time');
    for (var i = 0; i < oTime.length; i++) {
        gettime('2021-1-1 00:00:00', oTime[i]);
    }
    setInterval(function() {
        gettime('2021-1-1 00:00:00', oTime[0]);
        gettime('2021-1-1 00:00:00', oTime[1]);
        gettime('2021-1-1 00:00:00', oTime[2]);
    }, 1000);
};