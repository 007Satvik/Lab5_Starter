// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const synth = window.speechSynthesis;
  
  const image1 = document.querySelector('img');
  //image1.addEventListener('')
  const voices = speechSynthesis.getVoices();
  //append voices to the list
  for(var i = 0; i < voices.length; i++){
    const option1 = document.createElement('option');
    option1.textContent = `${voices[i].name} (${voices[i].lang})`;
    option1.setAttribute('data-lang', voices[i].lang);
    option1.setAttribute('data-name', voices[i].name);
    document.getElementById('voice-select').appendChild(option1);
  }
  const voiceSelect = document.getElementById('voice-select');
  const play = document.querySelector('button');


  play.addEventListener('click', (event) => {
    image1.src = `assets/images/smiling-open.png`;
  });

  //synth.addEventListener('change')

  play.addEventListener('click', (event) => {
  const text = document.getElementById('text-to-speak');
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
  const utterance = new SpeechSynthesisUtterance(text.value);
  for (let i = 0; i < voices.length ; i++) {
    //console.log('here');
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
      //console.log('here2');
    }
  }
    image1.src = `assets/images/smiling-open.png`;
    synth.speak(utterance);
    //add event to check if synth is still speaking
    var tempInterval = setInterval(myfunction, 500);
    if(image1.src ==`assets/images/smiling.png` ){
      clearInterval(tempInterval);
    }
    text.blur();
    // while(synth.speaking){
    //   image1.src = `assets/images/smiling-open.png`;
    // }
  });
  function myfunction(){
    if(!synth.speaking){
      image1.src = `assets/images/smiling.png`;
    }
  }
}
