const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.classList.add('active');
    });

    image.addEventListener('mouseleave', () => {
        image.classList.remove('active');
    });
});
