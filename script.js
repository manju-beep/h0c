const cards = document.querySelectorAll('.card');
let current = 0;
const deck = document.getElementById('deck');

// Show first card
cards[current].classList.add('active');

// Flowing hearts
const particleEmojis = ['💖','💕','💓','💗','💞','✨','🌸','💘'];

function spawnHeart() {
  const p = document.createElement('span');
  p.className = 'particle';
  p.textContent = particleEmojis[Math.floor(Math.random()*particleEmojis.length)];
  
  p.style.left = Math.random() * 90 + '%';
  p.style.fontSize = 7 + Math.random() * 9 + 'px';
  p.style.opacity = 0.7;
  p.style.animationDuration = (4 + Math.random()*3) + 's';
  
  deck.appendChild(p);
  p.addEventListener('animationend', () => p.remove());
}

// Spawn a heart every 300ms
setInterval(spawnHeart, 300);

// Next button
function nextCard() {
  if(current < cards.length - 1){
    cards[current].classList.remove('active');
    current++;
    cards[current].classList.add('active');
  }
}

// Confetti & YES
function launchConfetti(){
  const confettiBox = document.getElementById('confetti');
  for(let i=0;i<80;i++){
    const piece = document.createElement('span');
    piece.className='piece';
    piece.textContent = particleEmojis[Math.floor(Math.random()*8)];
    piece.style.left=Math.random()*100+'vw';
    piece.style.animationDuration=(2+Math.random()*3)+'s';
    confettiBox.appendChild(piece);
    setTimeout(()=>piece.remove(),5000);
  }
}

function answer(){
  const giant = document.createElement('div');
  giant.className="giant-yes";
  giant.textContent="YES!!!";
  document.body.appendChild(giant);

  launchConfetti();

  setTimeout(()=>{
    const endScreen = document.getElementById("endScreen");
    endScreen.style.opacity=1;
    endScreen.style.pointerEvents="auto";
  },2000);

  const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
  audio.volume=0.3;
  audio.play();
}

