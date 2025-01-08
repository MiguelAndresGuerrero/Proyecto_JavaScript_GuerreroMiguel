const balon = document.getElementById('balon');
const history = document.getElementById('history');

let x = 175;
let y = 175;

function moveBall(direction) {
    const step = 20;
    let action = '';

    switch (direction) {
        case 'up':
            if (y - step >= 0) y -= step;
            action = 'Arriba';
            break
        case 'down':
            if (y + step <= 350) y += step;
            action = 'Abajo';
            break
        case 'left':
            if (x - step >= 0) x -= step;
            action = 'la Izquierda';
            break
        case 'right':
            if (x + step <= 350) x += step;
            action = 'la Derecha';
            break
    }

    balon.style.top = y + 'px';
    balon.style.left = x + 'px';

    const listItem = document.createElement('li');
    listItem.textContent = `El balon se movio hacia ${action}`;
    history.appendChild(listItem);
}

document.getElementById('move-up').addEventListener('click', () => moveBall('up'));
document.getElementById('move-down').addEventListener('click', () => moveBall('down'));
document.getElementById('move-left').addEventListener('click', () => moveBall('left'));
document.getElementById('move-right').addEventListener('click', () => moveBall('right'));