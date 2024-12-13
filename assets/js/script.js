
// Sélectionne le bouton et l'ajoute à l'écoute des clics
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Vérifie si un thème est déjà enregistré dans localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = 'Dark Mode';
    }
});

// Dark mode toggle logic
const darkModeToggleContact = document.getElementById('darkModeToggleContact');
const bodyContact = document.bodyContact;

// Check if dark mode was previously enabled
if (localStorage.getItem('theme') === 'dark') {
    bodyContact.classList.add('dark-mode');
    darkModeToggleContact.textContent = 'Light Mode';
}

darkModeToggleContact.addEventListener('click', () => {
    bodyContact.classList.toggle('dark-mode');
    if (bodyContact.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggleContact.textContent = 'Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggleContact.textContent = 'Dark Mode';
    }
});