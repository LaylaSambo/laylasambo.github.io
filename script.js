const hoverSound = new Audio('./assets/hover.mp3');
const clickSound = new Audio('./assets/click.mp3');
const buttons = document.querySelectorAll('.shell-btn');
const pageText = document.getElementById('page-text');

const pages = {
    btn1: `<h1>About Me!</h1><p>yapperr yapp yap about myself...</p>`,
    btn2: `<h1>Projects</h1><p>Work in progress....... </p>`,
    btn3: `<h1>Exp</h1><p>My skills and experience here</p>`,
    btn4: `<h1>Contact</h1><p>Feel free to reach out!</p>`
};

function setPage(pageId) {
    pageText.innerHTML = pages[pageId];
}

setPage('btn1');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    button.addEventListener('click', (e) => {
        clickSound.currentTime = 0;
        clickSound.play();
        setPage(e.currentTarget.id);
    });
});