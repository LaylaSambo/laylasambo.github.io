const hoverSound = new Audio('./assets/hover.mp3');
const clickSound = new Audio('./assets/click.mp3');
const buttons = document.querySelectorAll('.shell-btn');
const contentBox = document.querySelector('.white-box-content');


const pages = {
    btn1: `
        <h1>About Me!</h1>
        <p>yapper yapp yap about myself and intro to hobbies n stuff</p>
    `,
    btn2: `
        <h1>Projects</h1>
        <p>Work in progress....... </p>
    `,
    btn3: `
        <h1>Exp</h1>
        <p>My skills and experience here</p>
    `,
    btn4: `
        <h1>Contact</h1>
        <p>Feel free to reach out via email! :)</p>
    `
};

function setPage(pageId) {
    contentBox.innerHTML = pages[pageId];
}





buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    button.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play();
        setPage(e.target.id);
    });
});