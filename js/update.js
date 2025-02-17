document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');

    // Додаємо обробник подій для всіх зображень
    document.querySelectorAll('.t603__blockimg').forEach(block => {
        block.addEventListener('click', () => {
            const imageUrl = block.getAttribute('data-img-zoom-url');
            modalImage.src = imageUrl; // Встановлюємо зображення в модальне вікно
            modal.style.display = 'flex'; // Показуємо модальне вікно
        });
    });

    // Закриття модального вікна
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закриття модального вікна при кліку поза зображенням
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// модалка

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');
    const body = document.body; // Тег body для контролю прокрутки

    // Додаємо обробник подій для всіх зображень
    document.querySelectorAll('.t603__blockimg').forEach(block => {
        block.addEventListener('click', () => {
            const imageUrl = block.getAttribute('data-img-zoom-url');
            modalImage.src = imageUrl; // Встановлюємо зображення в модальне вікно
            modal.style.display = 'flex'; // Показуємо модальне вікно
            body.classList.add('no-scroll'); // Забороняємо прокрутку
        });
    });

    // Закриття модального вікна
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        body.classList.remove('no-scroll'); // Дозволяємо прокрутку
    });

    // Закриття модального вікна при кліку поза зображенням
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            body.classList.remove('no-scroll'); // Дозволяємо прокрутку
        }
    });

    // Закриття модального вікна при натисканні Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            body.classList.remove('no-scroll'); // Дозволяємо прокрутку
        }
    });
});


// звук двигуна
document.addEventListener('DOMContentLoaded', () => {
    const clickableImage = document.querySelector('.clickable-img img'); // Знаходимо зображення
    const engineSound = document.getElementById('engineSound'); // Знаходимо аудіо

    if (clickableImage && engineSound) {
        clickableImage.addEventListener('click', () => {
            // Перевірка, чи дозволяється відтворення
            if (engineSound.paused) {
                engineSound.currentTime = 0; // Почати звук спочатку
                engineSound.play()
                    .catch(error => console.error('Audio playback failed:', error));
            }
        });
    } else {
        console.error('Image or audio element not found.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const overlayImage = document.querySelector('.overlay-image'); // Знаходимо накладене зображення
    const audioPlayer = document.getElementById('audioPlayer'); // Знаходимо аудіоплеєр

    if (overlayImage && audioPlayer) {
        overlayImage.addEventListener('click', () => {
            audioPlayer.currentTime = 0; // Почати відтворення з початку
            audioPlayer.play(); // Відтворюємо аудіо
        });
    } else {
        console.error('Overlay image or audio file not found');
    }
});