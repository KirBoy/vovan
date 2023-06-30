const element = document.querySelector('.registration');

element.addEventListener('mouseover', function() {
    element.classList.add('hover');
});

element.addEventListener('mouseout', function() {
    element.classList.remove('hover');
});