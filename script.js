// global constants
// const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakes = 0;
var countDownTime = 16;
var timer;

function startGame(){
  //initialize game variables
  progress = 0;
  countDownTime = 16;
  mistakes = 0;
  clueHoldTime = 1000;
  document.getElementById('mistakesTxt').innerHTML = "Number of mistakes: " + mistakes + "/3";
  gamePlaying = true;
  generatePattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  mistakes = 0;
  document.getElementById('mistakesTxt').innerHTML = "Number of mistakes: " + mistakes + "/3";
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  countDownTime = 16;
  document.getElementById("timer").innerHTML = "Timer: " + (countDownTime-1) + " seconds";
  clearInterval(timer);
}

function displayCountDown(){
  countDownTime--;
  document.getElementById("timer").innerHTML = "Timer: " + (countDownTime-1) + " seconds";
  if(countDownTime <= 0){
    clearInterval(timer);
    loseGame();
  }
  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function generatePattern(){
  var patternLength = Math.floor(Math.random() * 8) + 3; // length between 3 and 10
  var newPattern = []
  for(let i = 0; i < patternLength; i++){
    newPattern.push(Math.ceil(Math.random() * 6));
  }
  pattern = newPattern;
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 70;
  timer = setInterval(displayCountDown, 1000);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn != pattern[guessCounter]){
    clearInterval(timer);
    countDownTime = 16;
    mistakes++;
    document.getElementById('mistakesTxt').innerHTML = "Number of mistakes: " + mistakes + "/3";
    if(mistakes >= 3){
     loseGame(); 
    }
    else{
      if(progress != pattern.length - 1){
        progress++;
        playClueSequence();
      }
      else{
        winGame();
      }
    }
  }
  else{
    if(guessCounter != progress){
      guessCounter++;
    }
    else{
      clearInterval(timer);
      countDownTime = 16;
      if(progress != pattern.length - 1){
        progress++;
        playClueSequence();
      }
      else{
        winGame();
      }
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 493.2,
  6: 545.4
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)