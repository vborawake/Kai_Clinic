const popup = document.querySelector('.popup.flex_column');

function showServices(e) {
    popup.style.display = 'flex';
    if (e.currentTarget.tagName === 'IMG') {
        popup.querySelector('.header p').innerText = 'Edit Service';
        popup.querySelector('#service_name').value = e.currentTarget.parentElement.previousElementSibling.innerText;
    }
    else {
        popup.querySelector('.header p').innerText = 'Add Services';
        popup.querySelector('#service_name').value = '';
    }
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
    });
}

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function closeDetails(e) {
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(0)';
    });
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}