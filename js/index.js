var audio = new Audio("./resources/audio/-1.mp3")
var volume = 50
function setAudio(h){
    audio.src = "./resources/audio/" + h + ".mp3"
    audio.loop = true
    audio.volume = volume*0.01
    audio.play()
}
audio.autoplay = true
var playing = false
const playbutton = document.querySelector(".play")
function turnon(){
    if(playing){
        playing = false
        fadeout()
        playbutton.classList.add("paused")
    }
    else{
        playing = true
        audio.play()
        fadein()
        playbutton.classList.remove("paused")
        
    }
}
function volumeChange(v){
    volume = v
    audio.volume = volume*0.01
}

function fadein(){
    var i = volume
    let fadeinI = setInterval(
        function() {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            if (i > 0) {
                i -= 1
                audio.volume = (volume - i)*0.01
            }
            else {
              // Stop the setInterval when 0 is reached
              clearInterval(fadeinI);
            }
    }, 25);
}
function fadeout(){
    var i = volume
    let fadeoutI = setInterval(
        function() {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            if (i > 0) {
                i -= 1
                audio.volume = i*0.01
            }
            else {
              // Stop the setInterval when 0 is reached
              clearInterval(fadeoutI);
            }
    }, 25);
}




function fullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }
}



const clock = document.querySelector('.clock');

var hour = -1
var hour_temp = -1
function getTime(){
    const time = new Date();
    hour = time.getHours();
    if(hour!=hour_temp){
        fadeout()
        sleep(25*volume + 1000).then(() => {
            setAudio(hour)
        })
        hour_temp = hour
    }
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.children[0].innerHTML = `${hour<10 ? `0${hour}`:hour}`
    clock.children[1].innerHTML = `${seconds%2==0 ? ":":" "}`
    clock.children[2].innerHTML = `${minutes<10 ? `0${minutes}`:minutes}`
    //clock.innerHTML = `${hour<10 ? `0${hour}`:hour}${seconds%2==0 ? ":":" "}${minutes<10 ? `0${minutes}`:minutes}`
}

getTime()
setInterval(getTime, 1000);




function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
function debugplay(){
    setAudio(7)
    fadeout()
    sleep(25*volume + 1000).then(() => {
        setAudio(8)
        fadein()
    })
}
function settime7(){
    setAudio(7)
}