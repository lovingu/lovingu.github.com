//document.getElementById('numdays').innerHTML = parseInt(d);
//document.getElementById('numhours').innerHTML = parseInt(h);
//document.getElementById('nummins').innerHTML = parseInt(m);
//document.getElementById('numsecs').innerHTML = parseInt(s);



var refreshId = setInterval(function() {
    var theDaysBox  = document.getElementById('numdays');
    var theHoursBox = document.getElementById('numhours');
    var theMinsBox  = document.getElementById('nummins');
    var theSecsBox  = document.getElementById('numsecs');
    var currentDays    = theDaysBox.innerHTML;
    var currentHours   = theHoursBox.innerHTML;
    var currentMins    = theMinsBox.innerHTML;
    var currentSeconds = theSecsBox.innerHTML;
    if(currentSeconds < 0 || currentMins < 0 || currentHours < 0 || currentDays < 0) {
        // if everything rusn out our timer is done!!
        // do some exciting code in here when your countdown timer finishes
        windows.location = '/coming.html';
    } else if(currentSeconds == 0 && currentMins == 0 && currentHours == 0) {
        // if the seconds and minutes and hours run out we subtract 1 day
        theDaysBox.innerHTML = String(currentDays-1);
        theHoursBox.innerHTML = "23";
        theMinsBox.innerHTML = "59";
        theSecsBox.innerHTML = "59";
    } else if(currentSeconds == 0 && currentMins == 0) {
        // if the seconds and minutes run out we need to subtract 1 hour
        theHoursBox.innerHTML = String(currentHours-1);
        theMinsBox.innerHTML = "59";
        theSecsBox.innerHTML = "59";
    } else if(currentSeconds == 0) {
        // if the seconds run out we need to subtract 1 minute
        theMinsBox.innerHTML = String(currentMins-1);
        theSecsBox.innerHTML = "59";
    } else {
        theSecsBox.innerHTML = String(currentSeconds-1);
    }
}, 1000);
