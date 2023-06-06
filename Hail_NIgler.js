'use strict'

const vid_tnd = document.querySelector('#vid-tnd');
const vid_cont = document.querySelector('.vid-ts');
const overlay_element = document.querySelector('.warning-overlay');
const continue_btn = document.querySelector('.continue');

const fullscreen = () => {
    const element = document.documentElement; // Fullscreen the entire page
    const requestMethod =
        element.requestFullscreen ||
        element.mozRequestFullScreen ||
        element.webkitRequestFullscreen ||
        element.msRequestFullscreen;

    if (requestMethod) {
        requestMethod.call(element);
    }
};

continue_btn.addEventListener('click', async function () {
    overlay_element.classList.add('hidden')
    if (!localStorage.getItem('vid-count')) {
        vid_cont.classList.remove('hidden');
        fullscreen();
        vid_tnd.play();
        await new Promise(resolve => vid_tnd.addEventListener('ended', resolve));
        vid_cont.classList.add('hidden');

    }
    // document.documentElement.classList.add('overflow-scroll');
    localStorage.setItem("vid-count", 1);
})