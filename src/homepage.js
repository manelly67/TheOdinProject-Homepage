import imageSmall from './assets/img/photo-small-size.jpg';
import imageMedium from './assets/img/photo-medium-size.jpg';
import imageLarge from './assets/img/photo-large-size.jpg';
import changeTheme from './assets/img/theme-light-dark.png';
import externalLink from './assets/img/open-in-new.png';
import { textContentAboutMe } from './assets/text-content';
import { arrayProjects } from './assets/text-content';
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

// HEADER
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

// PROJECTS CONTENT
const main = document.createElement('main');
const contentHeading = document.createElement('H2');
const content = document.createElement('section');
content.classList.add('contentProject');

contentHeading.textContent = 'My work';
for (let i = 0; i < arrayProjects.length; i++) {
    const project = document.createElement('article');
    project.setAttribute('id', `project${i+1}`);
    content.appendChild(project);
}

const allProjectsDiv = content.querySelectorAll('article');
const projectsInDiv = [...allProjectsDiv];
const iterator = projectsInDiv.entries();

projectsInDiv.forEach(() => {
    let index = iterator.next().value;
    let x = index[1];
    console.log(x.getAttribute('id'));
    const div1 = document.createElement('div');
    const img = document.createElement('img');
    const screenshot = new Image();
    img.setAttribute('src', mySmallImg.src);
    img.setAttribute('alt','');
    div1.classList.add('divImgArticle');
    img.classList.add('photoImg');
    const div2 = document.createElement('div');
    const name = document.createElement('h3');
    const links = document.createElement('div');
    div2.classList.add('divNameArticle');
    name.setAttribute('style','grid-column:1/2');
    links.setAttribute('style','grid-column:2/3');
    const githubLink = document.createElement('a');
    githubLink.setAttribute('target','_blank');
    const githubIcon = document.createElement('img');
    const githubImg = new Image();
    githubImg.src = github;
    githubIcon.classList.add('iconImg');
    githubIcon.setAttribute('src',githubImg.src);
    githubIcon.setAttribute('alt','github');
    const newWindowLink = document.createElement('a');
    newWindowLink.setAttribute('target','_blank');
    const newWindowIcon = document.createElement('img');
    const newWindowImg = new Image();
    newWindowImg.src = externalLink;
    newWindowIcon.classList.add('iconImg');
    newWindowIcon.setAttribute('src',newWindowImg.src);
    newWindowIcon.setAttribute('alt','new-window');

    const div3 = document.createElement('div');
    div3.classList.add('divDescriptionArticle');
    const description = document.createElement('p');

    arrayProjects.map((e)=>{
        switch(e.id===x.getAttribute('id')){
            case true:
            screenshot.src=e.screenshotProjectSource;
            img.setAttribute('src', screenshot.src);
            img.setAttribute('alt',`screenshot ${e.id}`);
            img.classList.add('projectImg');
            name.textContent= e.projectName;
            githubLink.setAttribute('href',e.githubHref);
            newWindowLink.setAttribute('href',e.projectNewWindow);
            description.textContent= e.projectDescription;
            break;
            case false:
            break;
        }
    });

    x.appendChild(div1);
    x.appendChild(div2);
    x.appendChild(div3);
    div1.appendChild(img);
    div2.appendChild(name);
    div2.appendChild(links);
    links.appendChild(githubLink);
    githubLink.appendChild(githubIcon);
    links.appendChild(newWindowLink);
    newWindowLink.appendChild(newWindowIcon);
    div3.appendChild(description);
})

// FOOTER
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