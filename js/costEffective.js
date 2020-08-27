var day = document.getElementsByClassName('days')
var hour = document.getElementsByClassName('hours')
var min = document.getElementsByClassName('minutes')
var sec = document.getElementsByClassName('seconds')
function getTimer(setTime) {
    // 当前时间
    var now = +new Date();
    var setime = +new Date(setTime);
    // 得到剩余秒数
    var disTime = (setime - now) / 1000;
    // 得到剩余天数
    var dayTime = parseInt(disTime / 60 / 60 / 24);
    // 得到剩余小时
    var dayHours = parseInt(disTime / 60 / 60 % 24);
    // 剩余分
    var dayMinutes = parseInt(disTime / 60 % 60);
    // 剩余秒
    var daysec = parseInt(disTime % 60);
    // 创建对象存进去
    var relTime = {};
    // 设置对象的键和值
    relTime['dayTime'] = dayTime;
    relTime['dayHours'] = dayHours;
    relTime['dayMinutes'] = dayMinutes;
    relTime['daysec'] = daysec;
    return relTime;
}
setInterval(function () {
    var objTime = getTimer('2020-9-20 14:25:14');
    for (var i = 0; i < day.length; i++) {
        if (i == 2) {
            continue;
        } else {
            day[i].innerHTML = objTime.dayTime + '';
            hour[i].innerHTML = objTime.dayHours + '';
            min[i].innerHTML = objTime.dayMinutes + '';
            sec[i].innerHTML = objTime.daysec + '';
        }
    }
}, 1000);
setInterval(function () {
    var objTime = getTimer('2021-4-26 18:00:00');
    day[2].innerHTML = objTime.dayTime + '';
    hour[2].innerHTML = objTime.dayHours + '';
    min[2].innerHTML = objTime.dayMinutes + '';
    sec[2].innerHTML = objTime.daysec + '';
}, 1000);