const hoverSound = new Audio('./assets/hover.mp3');
const clickSound = new Audio('./assets/click.mp3');
const buttons = document.querySelectorAll('.shell-btn');
const pageText = document.getElementById('page-text');

const pages = {
    btn1: `
    <h1>Hii, I'm Layla!</h1>
    <p>
        I am a Computer Science student driven by the goal of building software 
        that people actually enjoy using. My interest lies in creating 
        <strong>functional programs</strong> that improve daily convenience 
        and <strong>interactive games</strong> that provide engaging experiences.
    </p>
    <p>
        Currently, I am developing my skills in <strong>Software Engineering</strong> 
        and <strong>Game Development</strong>. I enjoy the process of solving 
        technical problems through code, while ensuring the end result is 
        intuitive and visually polished.
    </p>
    <p>
        <strong>Fun fact:</strong> I designed and drew every asset on this 
        website, including the icons, UI components, and backgrounds. This 
        portfolio serves as my first project where I am practicing the 
        integration of <strong>original digital art</strong> with 
        <strong>program logic</strong>.
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