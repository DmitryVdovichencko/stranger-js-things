import '../css/app.scss';
import particlesJS from 'particles.js';
import showdown from'showdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import "../assets/particles.json";

window.particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles-js config loaded');
});
Prism.highlightAll();
