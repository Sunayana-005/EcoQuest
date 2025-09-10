let score = 0;
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

const items = document.querySelectorAll('.draggable');
const bins = document.querySelectorAll('.bin');

const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');

const happyMessages = [
  "Beautifully sorted!",
  "Nature spirits cheer for you!",
  "That’s how you heal the Earth!"
];

const sadMessages = [
  "That item belongs elsewhere...",
  "The spirits are confused!",
  "Try again, eco-warrior!"
];

items.forEach(item => {
  item.dataset.origin = item.parentElement.id;

  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', item.id);
    e.dataTransfer.setData('type', item.dataset.type);
    item.classList.add('dragging');
    setTimeout(() => {
      item.style.visibility = 'hidden';
    }, 0);
  });

  item.addEventListener('dragend', e => {
    item.classList.remove('dragging');
    item.style.visibility = 'visible';
  });
});

bins.forEach(bin => {
    bin.addEventListener('dragover', e => e.preventDefault());

    bin.addEventListener('drop', e => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('id');
        const itemType = e.dataTransfer.getData('type');
        const binType = bin.dataset.accept;
        const draggedItem = document.getElementById(itemId);

        if (itemType === binType) {
        correctSound.play();
        bin.classList.add('correct');
        setTimeout(() => bin.classList.remove('correct'), 500);
        score += 10;
        message.textContent = happyMessages[Math.floor(Math.random() * happyMessages.length)];

        draggedItem.remove();
        } else {
        wrongSound.play();
        bin.classList.add('incorrect');
        setTimeout(() => bin.classList.remove('incorrect'), 500);
        score -= 5;
        message.textContent = sadMessages[Math.floor(Math.random() * sadMessages.length)];

        const originContainer = document.getElementById(draggedItem.dataset.origin);
    }

    scoreDisplay.textContent = `Score: ${score}`;
  });
});