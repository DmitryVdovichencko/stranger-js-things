import '../css/app.css';
import particlesJS from 'particles.js'
import "../assets/particles.json";

window.particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles-js config loaded');
});