// Show an alert when the "Join Now" button in the header is clicked
const joinNowButton = document.querySelector('#join-now');
joinNowButton.addEventListener('click', () => {
    alert('Thank you for your interest! Check our memberships below.');
});

// Show an alert when any navigation link (HOME, MEMBERSHIPS, LOCATION, CONTACT) is clicked
const navLinks = document.querySelectorAll('nav a'); // Get all nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert(`You clicked on ${link.textContent}`); // Show alert with the link text
    });
});

// Show an alert when any "Join Now" button in the membership section is clicked
const membershipButtons = document.querySelectorAll('.membership-card button');
membershipButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('You have chosen to join this membership!');
    });
});

// Add a simple hover effect to social media links
const socialMediaLinks = document.querySelectorAll('#social-media a'); 
socialMediaLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#3fcea5'; // Change background color on hover
    });
    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = '#ffffff'; // Reset background color after hover
    });
});