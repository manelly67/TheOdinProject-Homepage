import './style-reset.css';
import './style.css';
import './style-large.css';
import './style-medium.css';
import { googleFonts } from './components/google-fonts.js';
import { homepage } from './components/homepage.js';

const meta = document.createElement('meta');
meta.setAttribute('name','description');
meta.setAttribute('content','manelly67\'s exercise study project:homepage within the curriculum The Odin Project');

googleFonts();
homepage();

document.head.appendChild(meta);