/**
 * Created by xuyifei01 on 2015/3/24.
 */
var currentTimeActive = 1;
var unixTimer = 0;
function unix2human() {
    var dateObj = new Date(document.unix2beijing.timestamp.value * 1000);
    var UnixTimeToDate = dateObj.getFullYear() + '/' + formatDate(dateObj.getMonth() + 1) + '/' + formatDate(dateObj.getDate()) + ' ' + formatDate(dateObj.getHours()) + ':' + formatDate(dateObj.getMinutes()) + ':' + formatDate(dateObj.getSeconds());
    document.unix2beijing.result.value = UnixTimeToDate;
}
function human2unix() {
    var humanDate = new Date(Date.UTC(document.beijing2unix.year.value, (stripLeadingZeroes(document.beijing2unix.month.value) - 1), stripLeadingZeroes(document.beijing2unix.day.value), stripLeadingZeroes(document.beijing2unix.hour.value), stripLeadingZeroes(document.beijing2unix.minute.value), stripLeadingZeroes(document.beijing2unix.second.value)));
    document.beijing2unix.result.value = (humanDate.getTime() / 1000 - 8 * 60 * 60);
}
function stripLeadingZeroes(input) {
    if ((input.length > 1) && (input.substr(0, 1) == "0")) {
        return input.substr(1);
    } else {
        return input;
    }
}
function currentTime() {
    var timeNow = new Date();
    document.getElementById("currentunixtime").value = Math.round(timeNow.getTime() / 1000);
    document.getElementById("currenttime").value = new Date().getFullYear() + "-" + formatDate(new Date().getMonth() + 1) + "-" + formatDate(new Date().getDate()) + " " + formatDate(new Date().getHours()) + ":" + formatDate(new Date().getMinutes()) + ":" + formatDate(new Date().getSeconds());
    if (currentTimeActive) {
        unixTimer = setTimeout("currentTime()", 1000);
    }
}
function startTimer() {
    currentTimeActive = 1;
    currentTime();
}
function stopTimer() {
    currentTimeActive = 0;
    clearTimeout(unixTimer);
}
function encodeText() {
    var rawText = $("#rawText")[0].value;
    var encodeText = encodeURIComponent(rawText);
    $("#encodeText")[0].value = encodeText;
}
function decodeText() {
    var rawText = $("#rawText")[0].value;
    var decodeText = decodeURIComponent(rawText);
    $("#decodeText")[0].value = decodeText;
}
function formatDate(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}
function js_strto_time(str_time) {
    var new_str = str_time.replace(/:/g, '-');
    new_str = new_str.replace(/ /g, '-');
    var arr = new_str.split("-");
    var datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
    return strtotime = datum.getTime() / 1000;
}
function getTodayZeroTime(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var strTime = year + "-" + month + "-" + day + ' 00:00:00';
    $("input[name='zerotime']" ).val(js_strto_time(strTime));
}
$(document).ready(function(){
    getTodayZeroTime();
});
