// Select the button
const welcomeButton = document.getElementById('welbutton');

// Prompt user to enter their name and update the button text
welcomeButton.addEventListener('click', () => {
    const userName = prompt('Please enter your name:');
    console.log('agvxg')
    if (userName) {
        welcomeButton.textContent = `Welcome: ${userName}`;
    } else {
        alert('Name cannot be empty!');
    }
});
