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
    var humanDate = new Date(Date.UTC(document.beijing2unix.year.value, (stripLeadingZeroes(document.beijing2unix.month.value)-1), stripLeadingZeroes(document.beijing2unix.day.value), stripLeadingZeroes(document.beijing2unix.hour.value), stripLeadingZeroes(document.beijing2unix.minute.value), stripLeadingZeroes(document.beijing2unix.second.value)));
    document.beijing2unix.result.value = (humanDate.getTime()/1000 - 8*60*60);
}
function stripLeadingZeroes(input) {
    if((input.length > 1) && (input.substr(0,1) == "0")) {
        return input.substr(1);
    } else {
        return input;
    }
}
function currentTime() {
    var timeNow = new Date();
    document.getElementById("currentunixtime").innerHTML = Math.round(timeNow.getTime()/1000);
    document.getElementById("currenttime").innerHTML = new Date().getFullYear()  + "-" + formatDate(new Date().getMonth()+1) + "-" + formatDate(new Date().getDate())+" " + formatDate(new Date().getHours())+":"+formatDate(new Date().getMinutes())+":"+formatDate(new Date().getSeconds());
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
    var rawText  = $("#rawText")[0].value;
    var encodeText = encodeURIComponent(rawText);
    $("#encodeText")[0].value = encodeText;
}
function decodeText() {
    var rawText  = $("#rawText")[0].value;
    var decodeText = decodeURIComponent(rawText);
    $("#decodeText")[0].value = decodeText;
}
function formatDate(num) {
    if (parseInt(num) < 10) {
        num = '0'+num;
    }
    return num;
}