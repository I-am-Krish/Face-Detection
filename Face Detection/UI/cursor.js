const cursor = document.querySelector('#custom-cursor');

document.addEventListener('mousemove', (event) => {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
});

const hoverElements = document.querySelectorAll('.hover-effect');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});
