var refresher = setInterval(function () {
    var c = new Date();
    var month = 12;
    c.setFullYear(2012, month-1, 21);
    c.setHours(1);
    c.setMinutes(0);
    c.setSeconds(0);
    c.setMilliseconds(0);
    var e = Date();
    var f = (Date.parse(e) - Date.parse(c)) / 1000;
    var g = Math.floor(f / (3600 * 24));
    f = f % (3600 * 24);
    var b = Math.floor(f / 3600);
    if (b < 10) {
        b = "0" + b;
    }
    f = f % 3600;
    var d = Math.floor(f / 60);
    if (d < 10) {
        d = "0" + d;
    }
    f = f % 60;
    if (f < 10) {
        f = "0" + f;
    }
    var theDays = document.getElementById("h_hours");
    var theHours = document.getElementById("h_days");
    var theMinutes = document.getElementById("h_minutes");
    var theSeconds = document.getElementById("h_seconds");
    theDays.innerHTML = b;
    theHours.innerHTML = g;
    theMinutes.innerHTML = d;
    theSeconds.innerHTML = f;
}, 1000);
