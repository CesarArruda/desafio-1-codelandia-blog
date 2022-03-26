const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.news__posts', { delay: 100 });
ScrollReveal().reveal('.news__posts-date', { delay: 200 });
ScrollReveal().reveal('.news__posts h2', { delay: 400 });
ScrollReveal().reveal('.news__posts p', { delay: 600 });
ScrollReveal().reveal('.news__posts a', { delay: 900 });