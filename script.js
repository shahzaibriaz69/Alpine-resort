let currentPosition = 0;
const slider = document.getElementById('slider');

function moveSlider(direction) {
    const cardWidth = document.querySelector('.room-card').offsetWidth + 30; // Card width + gap
    const totalCards = document.querySelectorAll('.room-card').length;
    const visibleCards = 3;
    const maxScroll = totalCards - visibleCards;

    // Update position
    currentPosition += direction;

    // Boundaries (don't scroll past the first or last cards)
    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition > maxScroll) {
        currentPosition = maxScroll;
    }

    // Move the track using CSS transform
    slider.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
}