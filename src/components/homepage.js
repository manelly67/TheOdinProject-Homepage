import imageSmall from '../assets/img/photo-small-size.jpg';
import imageMedium from '../assets/img/photo-medium-size.jpg';
import imageLarge from '../assets/img/photo-large-size.jpg';
import photoFooter from '../assets/img/photo-footer.png';
import changeTheme from '../assets/img/theme-light-dark.png';
import externalLink from '../assets/img/open-in-new.png';
import emailIcon from '../assets/img/email-outline.png';
import phoneIcon from '../assets/img/phone-dial-outline.png';
import { textContentAboutMe } from '../assets/text-content';
import { githubAccount, linkedinAccount } from '../assets/text-content';
import {
  textContentContactMe,
  phoneText,
  mailText,
} from '../assets/text-content';
import { arrayProjects } from '../assets/text-content';
import { github, linkedin } from '../assets/icons-source';
import { insertImg } from './insertImg';

function homepage() {
  const root = document.documentElement;
  root.setAttribute('lang','en');
  root.setAttribute('id', 'root-element');
  root.className = 'light';

  const flashMessages = document.createElement('div');
  flashMessages.setAttribute('id', 'flash-messages');

  const themeButton = document.createElement('button');
  themeButton.classList.add('themeButton');
  const changeThemeImg = new Image();
  changeThemeImg.src = changeTheme;
  insertImg(themeButton, changeThemeImg.src, 'theme-light-dark', 'iconImg','30px','30px');
  themeButton.setAttribute('style', 'border-radius: 30px;');
  themeButton.addEventListener('click', () => {
    setTheme();
  });

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
  sourceLarge.setAttribute('media', '(min-width: 981px)');
  const myMediumImg = new Image();
  myMediumImg.src = imageMedium;
  sourceMedium.setAttribute('srcset', myMediumImg.src);
  sourceMedium.setAttribute('media', '(min-width:621px) and (max-width:980px)');
  const mySmallImg = new Image();
  mySmallImg.src = imageSmall;
  photoImg.setAttribute('src', mySmallImg.src);
  photoImg.setAttribute('alt', '');
  photoImg.classList.add('photoImg');

  const aboutMe = document.createElement('section');
  const aboutMeHeading = document.createElement('H2');
  const aboutMeText = document.createElement('p');
  const aboutMeIcons = document.createElement('div');
  const githubLink = document.createElement('a');
  const linkedinLink = document.createElement('a');

  aboutMe.classList.add('content');
  aboutMeHeading.textContent = 'About me';
  aboutMeText.textContent = textContentAboutMe;
  aboutMeText.classList.add('text');
  aboutMeIcons.classList.add('divIcons');
  githubLink.setAttribute('href', githubAccount);
  githubLink.setAttribute('target', '_blank');
  const githubImg = new Image();
  githubImg.src = github;
  insertImg(githubLink, githubImg.src, 'Github', 'iconImg','30px','30px');
  linkedinLink.setAttribute('href', linkedinAccount);
  linkedinLink.setAttribute('target', '_blank');
  const linkedinImg = new Image();
  linkedinImg.src = linkedin;
  insertImg(linkedinLink, linkedinImg.src, 'Linkedin', 'iconImg','30px','30px');

  // PROJECTS CONTENT
  const main = document.createElement('main');
  const contentHeading = document.createElement('H2');
  const content = document.createElement('section');
  content.classList.add('contentProject');

  contentHeading.textContent = 'My work';
  for (let i = 0; i < arrayProjects.length; i++) {
    const project = document.createElement('article');
    project.setAttribute('id', `project${i + 1}`);
    content.appendChild(project);
  }

  const allProjectsDiv = content.querySelectorAll('article');
  const projectsInDiv = [...allProjectsDiv];
  const iterator = projectsInDiv.entries();

  projectsInDiv.forEach(() => {
    let index = iterator.next().value;
    let x = index[1];
    const div1 = document.createElement('div');
    div1.classList.add('divImgArticle');
    const screenshot = new Image();
    const div2 = document.createElement('div');
    div2.classList.add('divNameArticle');
    const name = document.createElement('h3');
    name.setAttribute('style', 'grid-column:1/2');
    const links = document.createElement('div');
    links.setAttribute('style', 'grid-column:2/3');
    const githubLink = document.createElement('a');
    githubLink.setAttribute('target', '_blank');
    insertImg(githubLink, githubImg.src, 'github', 'iconImg','30px','30px');
    const newWindowLink = document.createElement('a');
    newWindowLink.setAttribute('target', '_blank');
    const newWindowImg = new Image();
    newWindowImg.src = externalLink;
    insertImg(newWindowLink, newWindowImg.src, 'new-window', 'iconImg','30px','30px');
    const div3 = document.createElement('div');
    div3.classList.add('divDescriptionArticle');
    const description = document.createElement('p');

    arrayProjects.map((e) => {
      switch (e.id === x.getAttribute('id')) {
        case true:
          screenshot.src = e.screenshotProjectSource;
          insertImg(div1, screenshot.src, `screenshot ${e.id}`, 'projectImg','30px','30px');
          name.textContent = e.projectName;
          githubLink.setAttribute('href', e.githubHref);
          newWindowLink.setAttribute('href', e.projectNewWindow);
          description.textContent = e.projectDescription;
          break;
        case false:
          break;
      }
    });

    x.appendChild(div1);
    x.appendChild(div2);
    x.appendChild(div3);
    div2.appendChild(name);
    div2.appendChild(links);
    links.appendChild(githubLink);
    links.appendChild(newWindowLink);
    div3.appendChild(description);
  });

  // FOOTER
  const footer = document.createElement('footer');
  const contactMe = document.createElement('section');
  const contactMeHeading = document.createElement('H2');
  const contactMeText = document.createElement('p');
  const phoneNumber = document.createElement('p');
  const mailAddress = document.createElement('p');
  contactMeHeading.textContent = 'Contact me';
  contactMeText.textContent = textContentContactMe;
  phoneNumber.textContent = phoneText;
  mailAddress.textContent = mailText;
  const phoneImg = new Image();
  phoneImg.src = phoneIcon;
  insertImg(contactMe, phoneImg.src, 'phone', 'iconImg','30px','30px');
  const emailImg = new Image();
  emailImg.src = emailIcon;
  insertImg(contactMe, emailImg.src, 'email-address', 'iconImg','30px','30px');
  const contactMeIcons = document.createElement('div');
  const contactMegithubLink = document.createElement('a');
  const contactMelinkedinLink = document.createElement('a');
  contactMegithubLink.setAttribute('href', githubAccount);
  contactMegithubLink.setAttribute('target', '_blank');
  insertImg(contactMegithubLink, githubImg.src, 'Github', 'iconImg','30px','30px');
  contactMelinkedinLink.setAttribute('href', linkedinAccount);
  contactMelinkedinLink.setAttribute('target', '_blank');
  insertImg(contactMelinkedinLink, linkedinImg.src, 'Linkedin', 'iconImg','30px','30px');

  const imgFooter = document.createElement('img');
  const photoMNL = new Image();
  photoMNL.src = photoFooter;
  imgFooter.classList.add('photoFooter');
  imgFooter.setAttribute('src', photoMNL.src);
  imgFooter.setAttribute('width', 'auto');
  imgFooter.setAttribute('height', '250px');
  imgFooter.setAttribute('alt', 'portfolio owner');

  document.body.appendChild(flashMessages);
  document.body.appendChild(themeButton);
  document.body.appendChild(bgDivFirst);
  document.body.appendChild(bgDivSecond);

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
  aboutMeIcons.appendChild(linkedinLink);

  main.appendChild(contentHeading);
  main.appendChild(content);

  footer.appendChild(contactMe);
  footer.appendChild(imgFooter);
  contactMe.appendChild(contactMeHeading);
  contactMe.appendChild(contactMeText);
  contactMe.appendChild(phoneNumber);
  contactMe.appendChild(mailAddress);
  contactMe.appendChild(contactMeIcons);
  contactMeIcons.appendChild(contactMegithubLink);
  contactMeIcons.appendChild(contactMelinkedinLink);
}

export { homepage };
