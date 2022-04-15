var now = moment();
var currentTime = { text: moment().format("h:00 A"), hour: moment().hour() };


// Current day function
function currentDay() {
    var nowDay = moment();
    var currentDay = document.getElementById("currentDay").innerHTML = nowDay.format('MMMM Do YYYY, h:mm:ss a');
}
currentDay();

 



function statusChange() {
    var timeBoxEl = document.getElementById("timeBox");
    var timeBox2El = document.getElementById("timeBox2");
    var timeBox3El = document.getElementById("timeBox3");
    var  timeBox4El = document.getElementById("timeBox4");
    var  timeBox5El = document.getElementById("timeBox5");
    var  timeBox6El = document.getElementById("timeBox6");
    var  timeBox7El = document.getElementById("timeBox7");
    var  timeBox8El = document.getElementById("timeBox8");
    var  timeBox9El = document.getElementById("timeBox9");
    var  timeBox10El = document.getElementById("timeBox10");

    // var timeBoxes = [timeBox, timeBox2];

    var nowTime = moment().format("hh:mm a");
    var codeTime = document.getElementById("time").innerHTML;
    // loop!
    $(".activity-style").each(function () {


        

        if (nowTime === codeTime) {
            timeBoxEl.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBoxEl.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBoxEl.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox2El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox2El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox2El.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox3El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox3El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox3El.className = "future";
        }

        
        if (nowTime === codeTime) {
            timeBox4El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox4El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox4El.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox5El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox5El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox5El.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox6El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox6El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox6El.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox7El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox7El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox7El.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox8El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox8El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox8El.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox9El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox9El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox9El.className = "future";
        }


        if (nowTime === codeTime) {
            timeBox10El.className = "present";
        }
        else if (nowTime < codeTime) {
            timeBox10El.className = "past";
        }
        else if (nowTime > codeTime) {
            timeBox10El.className = "future";
        }

        
    })

}

statusChange()
