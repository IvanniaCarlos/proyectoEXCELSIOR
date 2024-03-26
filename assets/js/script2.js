const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const image = container.querySelector('img');
    const title = image.getAttribute('data-title');

    const titleElement = document.createElement('div');
    titleElement.classList.add('image-title');
    titleElement.textContent = title;

    container.appendChild(titleElement);
});


