const hoverSound = new Audio('./assets/hover.mp3');
const clickSound = new Audio('./assets/click.mp3');
const buttons = document.querySelectorAll('.shell-btn');
const pageText = document.getElementById('page-text');

const pages = {
    btn1: `
    <h1>Hii, I'm Layla and welcome to my website!</h1>
    <p>
        I'm a Computer Science student who is way more into the 
        <strong>creative</strong> side of tech. I’ve always been drawn to the 
        creative side of technology— I don't just want to write code; I want to 
        create interactive experiences.
    </p>
    <p>
        I’m currently focusing on <strong>Software Engineering</strong> 
        and <strong>Game Dev</strong>. I love the challenge of making 
        code work, but I love making it look good even more.
    </p>
    <p>
        <strong>Fun fact:</strong> I actually drew and designed everything 
        you see on this site! From the icons and buttons to the layout—it’s 
        all my own art. I don't have a giant portfolio yet, but I'm 
        starting here by merging my art with my code.
    </p>`,
    
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