// Function to display the current year and last modified date in the footer
document.addEventListener('DOMContentLoaded', function () {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('year').textContent = year;
    document.getElementById('lastModified').textContent = lastModified;
});

// Hamburger menu toggle for mobile view
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('show');
});

document.getElementById('ask-question').addEventListener('change', function() {
    const topicSelect = document.getElementById('topic');
    const questionField = document.getElementById('question');
    topicSelect.disabled = !this.checked;
    questionField.disabled = !this.checked;
});
