const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255/50%' : 'rgb(0 0 0/50%';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%' : 'rgb(255 255 255 / 50%';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? imageMode('light') : imageMode('dark');
}

// Dark Mode Styles
/*function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0/50%';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255/50%';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}*/

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(false);
        //darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(true);
        //lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme 檢查前次主題狀態
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme) {
//     // 設定上次主題
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//         toggleDarkLightMode(false);
//         //darkMode();
//     }
// }