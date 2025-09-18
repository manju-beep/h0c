const cards = document.querySelectorAll('.card'), deck = document.getElementById('deck'), emojis = ['💖','💕','💓','💗','💞','✨','🌸','💘'];
let current = 0;
cards[0].classList.add('active');

setInterval(() => {
  const p = document.createElement('span');
  p.className = 'particle';
  p.textContent = emojis[Math.random() * emojis.length | 0];
  p.style.left = Math.random() * 90 + '%';
  p.style.fontSize = 7 + Math.random() * 9 + 'px';
  p.style.opacity = 0.7;
  p.style.animationDuration = (4 + Math.random() * 3) + 's';
  deck.appendChild(p);
  p.addEventListener('animationend', () => p.remove());
}, 300);

function nextCard() {
  if (current < cards.length - 1) {
    cards[current++].classList.remove('active');
    cards[current].classList.add('active');
  }
}

function launchConfetti() {
  const c = document.getElementById('confetti');
  for (let i = 0; i < 80; i++) {
    const e = document.createElement('span');
    e.className = 'piece';
    e.textContent = emojis[Math.random() * emojis.length | 0];
    e.style.left = Math.random() * 100 + 'vw';
    e.style.animationDuration = (2 + Math.random() * 3) + 's';
    c.appendChild(e);
    setTimeout(() => e.remove(), 5000);
  }
}

function answer() {
  const y = document.createElement('div');
  y.className = "giant-yes";
  y.textContent = "YES!!!";
  document.body.appendChild(y);
  launchConfetti();
  setTimeout(() => {
    const end = document.getElementById("endScreen");
    end.style.opacity = 1;
    end.style.pointerEvents = "auto";
  }, 2000);
  new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3').play();
}
