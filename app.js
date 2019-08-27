const buttons = document.querySelectorAll('button');

const playnote = event => {
    const button = event.target;
    const note = button.dataset.note;
//console.log(event.target.dataset.note) // note pq data-note en index
    const audioId= `audio${note}`;
    const audio= document.getElementById(audioId);
    console.log(audioId);
    audio.pause();
    audio.currentTime = 0;
    audio.play();

}


buttons.forEach(
    button => button.addEventListener("click", playnote)
);

const keyNoteDown = event =>{
    const key = event.key;
    console.log(event);
    const button = document.querySelector(`button[data-key="${key}"]`)
    if (butoon) button.click();// va a llamar a la funcion click de la linea 18 
}
document.addEventListener('keydown', keyNoteDown ); // keydown es un evento



