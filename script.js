// script.js
//window.addEventListener("scroll", () => {
//    const video = document.getElementById("fullscreen-video");
//    const content = document.getElementById("content");
//
//    const videoBottom = video.getBoundingClientRect().bottom;
//    const contentTop = content.getBoundingClientRect().top;
//
//    if (videoBottom <= 0) {
//        content.classList.remove("hidden");
//    } else if (contentTop > window.innerHeight) {
//        content.classList.add("hidden");
//    }
//});
// script.js
window.addEventListener("scroll", () => {
    const video = document.getElementById("fullscreen-video");
    const content = document.getElementById("content");

    const videoBottom = video.getBoundingClientRect().bottom;
    const contentTop = content.getBoundingClientRect().top;

    if (videoBottom <= window.innerHeight && contentTop >= 0) {
        content.classList.remove("hidden");
    } else {
        content.classList.add("hidden");
    }
});
