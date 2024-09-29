function _(key){
    return document.getElementById(key);
    }

function container_move(callback){
    _("shell").style.transform = _("shell").style.transform == "translateX(0%)" ? "translateX(-50%)" : "translateX(0%)";
    setTimeout(callback, 500);
    }

function open_card(){
    if(window.matchMedia("(max-width: 480px)")){
        _("container").style.transform = _("container").style.transform == "rotateX(0deg)" ? "rotateX(0deg)" : "rotateX(0deg)";
    }
    else{
        _("container").style.transform = _("container").style.transform == "rotateX(0deg)" ? "rotateX(0deg)" : "rotateX(0deg)";
       
    }
    _("box1").style.transform = _("box1").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
    _("box1_back").style.transform = _("box1_back").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";

  }
  
  

  // Set the event date and time
var eventDate = new Date("October 11, 2024 14:00:00").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
    // Get current date and time
    var now = new Date().getTime();

    // Find the difference between now and the event date
    var distance = eventDate - now;

    // If the countdown is over, stop the clock at 00:00:00:00
    if (distance < 0) {
        distance = 0;
    }

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the clock element
    document.getElementById("clock").innerHTML = 
        ('0 ' + days).slice(-2) + "d  " + ('0'  + hours).slice(-2) + "h  " +
        ('0 ' + minutes).slice(-2) + "m  " + ('0 ' + seconds).slice(-2) + "s  ";
}, 1000);
