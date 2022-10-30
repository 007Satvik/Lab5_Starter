// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement1 = document.getElementById('horn-select');
  selectElement1.addEventListener('change', (event) =>{
    const result1 = document.querySelector("img");
    //const result2 = document.getElementsByClassName('hidden');
    //result2.src = 'assets/audio/${event.target.value}.mp3';
    result1.type = "image/svg";
    result1.src =`assets/images/${event.target.value}.svg`;
    //alert(`assets/images/${event.target.value}.svg`);
  });
  //get the reference to the slide bar 
  const selectElement2 = document.getElementById('volume');
  //get reference to the image inside div
  const volume = document.getElementById('volume-controls').getElementsByTagName('img')[0];
  const value1 = document.getElementById('volume-controls').getElementsByTagName('input')[0];
  //called whenever slide bar is affected
  //console.log(volume);
  selectElement2.addEventListener('input', updateValue);
  //alerts(volume);
  function updateValue(e){
    value1.value = e.target.value;
    if(e.target.value == 0){
      volume.src = 'assets/icons/volume-level-0.svg';

    }
    else if(e.target.value <33){
      volume.src = 'assets/icons/volume-level-1.svg';

    }
    else if(e.target.value < 67){
      volume.src = 'assets/icons/volume-level-2.svg';
      
    }
    else {
      volume.src = 'assets/icons/volume-level-3.svg';
    }
  }
  const play = document.querySelector('button');
  play.addEventListener('click', (event) => {
    const sound = document.getElementsByClassName('hidden')[0];
    sound.src= `assets/audio/${selectElement1.value}.mp3`;
    //alert(`assets/audio/${selectElement1.value}.mp3`);
    sound.volume = value1.value / 100;
    sound.play();

    if(selectElement1.value == "party-horn"){
      const JsConfetti = new JSConfetti();
      JsConfetti.addConfetti();
    }
  })
}
