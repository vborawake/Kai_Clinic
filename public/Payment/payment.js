const popup = document.querySelector('.popup.flex_column');
// const notifications = document.querySelector('.notifications_wrapper.flex_column');
const cardDetails = document.querySelector('.card_details.flex_column');

function showPayment(e) {
    popup.style.display = 'flex';
    popup.style.top = `${ window.scrollY + 50 }px`;
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
    });
}

// function showNotifications(e) {
//     e.stopPropagation();
//     console.log(e);
//     notifications.style.display = 'flex';
//     notifications.style.top = `${e.pageY - notifications.getBoundingClientRect().height}px`;
//     notifications.style.left = `${ e.pageX }px`;
// }

function showCardDetails(e) {
    console.log(e);
    if (cardDetails.style.display === '' || cardDetails.style.display === 'none') {
        cardDetails.style.display = 'flex';
        if (window.innerWidth < 768) {
            cardDetails.style.left = `${ e.pageX - e.layerX - (cardDetails.getBoundingClientRect().width / 4) }px`;
            cardDetails.style.top = `${ e.pageY - cardDetails.getBoundingClientRect().height - 80 }px`;
            return;
        }
        cardDetails.style.left = `${ e.pageX - e.layerX }px`;
        cardDetails.style.top = `${ e.pageY - cardDetails.getBoundingClientRect().height - 80 }px`;
    }
    else cardDetails.style.display = 'none';
}

function closeDetails(e) {
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(0)';
    });
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}

document.addEventListener('click', () => {
    if (notifications.style.display === 'flex') notifications.style.display = 'none';
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

window.addEventListener('resize', () => {
    console.log(window.innerWidth);
});