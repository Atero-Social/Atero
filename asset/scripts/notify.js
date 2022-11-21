const notify = true
const audio = new Audio("./asset/sounds/notify_sound.mp3")
audio.play();

if (notify == true){
    setTimeout(notifyMe, 3000)
}

function notifyMe(){
    audio.play();
}

console.log(notify)


function post_sucas_notify() {

}

function like_notify() {
    
}