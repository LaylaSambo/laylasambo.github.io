const hoverSound = new Audio('./assets/hover.mp3');
const clickSound = new Audio('./assets/click.mp3');
const buttons = document.querySelectorAll('.shell-btn');
const pageText = document.getElementById('page-text');
const crab = document.getElementById('crab-button');
const music = document.getElementById('crab-music');


const pages = {
    btn1: `
    <h1>Hii, I'm Layla!</h1>
    <p>
        I am a Computer Science student driven by the goal of building software 
        that people actually enjoy using. My interest lies in creating 
        functional programs that improve daily convenience 
        and interactive games that provide engaging experiences.
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
        website serves as my first project where I am practicing the 
        integration of digital art with program logic :).
    </p>`,

    btn2: `
    <h1>Experience</h1>
    <p>My skills and experience here</p>
    `,
    btn3: `
    <h1>Projects</h1>
    <p>Work in progress...</p>
    `,
    btn4: `
    <h1>Contact</h1>
    <p>Feel free to reach out!</p>
    `
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


/*crab*/
let isDancing = false;
let danceTimer = null;

crab.addEventListener('click', () => {
    if (!isDancing) {
        isDancing = true;
        music.play();

        let currentFrame = 2;
        danceTimer = setInterval(() => {
            crab.src = `./assets/crab${currentFrame}.png`;
            currentFrame = currentFrame === 2 ? 3 : 2;
        }, 300); 

    } else {
        isDancing = false;
        music.pause();
        music.currentTime = 0; 
        
        clearInterval(danceTimer);
        crab.src = './assets/crab1.png';
    }
});