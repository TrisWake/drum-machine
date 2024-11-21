// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3')
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/snare-drum.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const metronome = document.querySelector('#metronome')
// This function is called every 600ms
let count = 0
function update() {
    count++
    // Play the 'tick' sound
    if(count % 4 === 0){
        // count = 0
        if(metronome.checked){
            tock.play()
    }
    else{
        console.log("Hello")
        if(metronome.checked){
        tick.play();
        
        }
    }
}
    let metronomeCount = document.querySelector('.count')
    if(metronomeCount){
        metronomeCount.innerText = count
    }

    let checkbox1 = document.querySelector('#kick-drum')
    if(checkbox1.checked){
        kickDrum.play()
    }

    let checkbox3 = document.querySelector('#snare-drum')
    if(checkbox3.checked){
        snareDrum.play()
    }

    let checkbox4 = document.querySelector('#hi-hat')
    if(checkbox4.checked){
        hiHat.play()
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
