import imageSmall from './assets/img/photo-small-size.jpg';
import imageMedium from './assets/img/photo-medium-size.jpg';
import imageLarge from './assets/img/photo-large-size.jpg';
import changeTheme from './assets/img/theme-light-dark.png';
import { textContentAboutMe } from './assets/text-content';
import { github,linkedin } from './assets/icons-source';


function homepage(){

const root = document.documentElement;
root.setAttribute('id','root-element');
root.className='light';

const flashMessages = document.createElement('div');
flashMessages.setAttribute('id','flash-messages');

const themeButton = document.createElement('button');
themeButton.classList.add('themeButton');
const themeButtonImg = document.createElement('img');
const changeThemeImg = new Image();
changeThemeImg.src = changeTheme;
themeButtonImg.setAttribute('src', changeThemeImg.src);
themeButtonImg.setAttribute('alt','theme-light-dark');
themeButtonImg.classList.add('iconImg');
themeButton.setAttribute('style','border-radius: 30px;');
themeButton.addEventListener("click", () => {
    setTheme();
})

function setTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }


// background colors
const bgDivFirst = document.createElement('div');
bgDivFirst.classList.add('bgDivFirst');
const bgDivSecond = document.createElement('div');
bgDivSecond.classList.add('bgDivSecond');

const pageContainer = document.createElement('div');
pageContainer.classList.add('page-container');


// header
const header = document.createElement('header');
const textInPhoto = document.createElement('H1');
textInPhoto.textContent = 'My Portfolio';
textInPhoto.classList.add('textInPhoto');

const photoPicture = document.createElement('picture');
const sourceLarge = document.createElement('source');
const sourceMedium = document.createElement('source');
const photoImg = document.createElement('img');
const myLargeImg = new Image();
myLargeImg.src = imageLarge;
sourceLarge.setAttribute('srcset', myLargeImg.src);
sourceLarge.setAttribute('media','(min-width: 981px)');
const myMediumImg = new Image();
myMediumImg.src = imageMedium;
sourceMedium.setAttribute('srcset', myMediumImg.src);
sourceMedium.setAttribute('media','(min-width:621px) and (max-width:980px)');
const mySmallImg = new Image();
mySmallImg.src = imageSmall;
photoImg.setAttribute('src', mySmallImg.src);
photoImg.setAttribute('alt','');
photoImg.classList.add('photoImg');


const aboutMe = document.createElement('section');
const aboutMeHeading = document.createElement('H2');
const aboutMeText = document.createElement('p');
const aboutMeIcons = document.createElement('div');
const githubLink = document.createElement('a');
const githubIcon = document.createElement('img');
const linkedinLink = document.createElement('a');
const linkedinIcon = document.createElement('img');
aboutMe.classList.add('content');
aboutMeHeading.textContent = 'About me';
aboutMeText.textContent = textContentAboutMe;
aboutMeText.classList.add('text');
aboutMeIcons.classList.add('divIcons');
githubLink.setAttribute('href','https://github.com/manelly67');
githubLink.setAttribute('target','_blank');
const githubImg = new Image();
githubImg.src = github;
linkedinLink.setAttribute('href','https://www.linkedin.com/in/marianellylopez');
linkedinLink.setAttribute('target','_blank');
const linkedinImg = new Image();
linkedinImg.src = linkedin;
githubIcon.setAttribute('src', githubImg.src);
githubIcon.setAttribute('alt', 'Github');
githubIcon.classList.add('iconImg');
linkedinIcon.setAttribute('src', linkedinImg.src);
linkedinIcon.setAttribute('alt','Linkedin');
linkedinIcon.classList.add('iconImg');

// projects content
const main = document.createElement('main');
const contentHeading = document.createElement('H2');
const content = document.createElement('section');
content.classList.add('contentProject');

contentHeading.textContent = 'My work';
const amountOfProjects = 6;
for (let i = 0; i < amountOfProjects; i++) {
    const project = document.createElement('article');
    project.setAttribute('id', `project${i+1}`);
    content.appendChild(project);
}




// footer
const footer = document.createElement('footer');



document.body.appendChild(flashMessages);
document.body.appendChild(themeButton);
document.body.appendChild(bgDivFirst);
document.body.appendChild(bgDivSecond);

themeButton.appendChild(themeButtonImg);
bgDivFirst.appendChild(pageContainer);
bgDivSecond.appendChild(footer);
pageContainer.appendChild(header);
pageContainer.appendChild(main);
header.appendChild(photoPicture);
header.appendChild(aboutMe);
photoPicture.appendChild(sourceLarge);
photoPicture.appendChild(sourceMedium);
photoPicture.appendChild(photoImg);
photoPicture.appendChild(textInPhoto);
aboutMe.appendChild(aboutMeHeading);
aboutMe.appendChild(aboutMeText);
aboutMe.appendChild(aboutMeIcons);
aboutMeIcons.appendChild(githubLink);
githubLink.appendChild(githubIcon);
aboutMeIcons.appendChild(linkedinLink);
linkedinLink.appendChild(linkedinIcon);

main.appendChild(contentHeading);
main.appendChild(content);



}



export {homepage};