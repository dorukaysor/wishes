import { playConfetti, fadeIn, scrollReveal } from '../components/animations.js';
import { SpeedInsights } from "@vercel/speed-insights/next";

document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.querySelector('#welcomeText');
    fadeIn(welcomeText);

    setTimeout(() => {
        playConfetti();
    }, 2000);

    scrollReveal();
});