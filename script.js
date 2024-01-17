function rollDice() {
    const dice = document.getElementById('dice');
    const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    
    // Apply animation class to trigger the roll animation
    dice.classList.add('rolling');

    // Update the dots continuously during the roll
    let currentResult = 1;
    const updateInterval = setInterval(() => {
        updateDots(currentResult);
        currentResult = currentResult % 6 + 1; // Cycle through numbers 1 to 6
    }, 100); // Update every 100 milliseconds

    // Stop the continuous update after a short delay (you can adjust the delay based on your preference)
    setTimeout(() => {
        clearInterval(updateInterval);
        // Set the final result
        updateDots(result);
        // Remove the animation class to reset the animation
        dice.classList.remove('rolling');
    }, 1000); // 1000 milliseconds delay for the animation to complete
}

function updateDots(result) {
    // Reset all dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.style.display = 'none');

    // Display the dots corresponding to the current result
    const dotToShow = document.getElementById(`dot${result}`);
    if (dotToShow) {
        dotToShow.style.display = 'block';
    }
}
