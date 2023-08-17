const chatSection = document.querySelector('.chat_section.flex_column.space_between');
const accountsList = document.querySelector('.accounts_list.flex_column.center');
const hamburger = document.querySelector('.hamburger.flex_column.center');

function showChatSection (event) {
    if (window.innerWidth < 992) {
        requestAnimationFrame(() => {
            accountsList.style.width = '0';
        });
        setTimeout(() => {
            accountsList.style.display = 'none';
        }, 500);
        document.querySelector('.hamburger.flex_column.center').style.display = 'flex';
    }
    chatSection.style.display = 'flex';
    chatSection.querySelector('.user p').innerHTML = event.currentTarget.querySelector('#username').innerHTML;

    // Array.from(accountsList.querySelector('.accounts.flex_column.width_full.center')).forEach(account => {
    //     account.classList.remove('active');
    // });
    // event.currentTarget.classList.add('active');
}

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function showMessagesSection(event) {
    console.log('Show messages');
    event.currentTarget.parentElement.style.display = 'none';
    accountsList.style.display = 'flex';
    requestAnimationFrame(() => {
        accountsList.style.width = '100%';
    });
    document.querySelector('.chat_section.flex_column.space_between').style.display = 'none';
}

function throttleFunc (func, delay) {
    let timeoutId;

    return function (...args) {
        if (timeoutId) return;
        timeoutId = setTimeout(() => {
            func(...args);
            timeoutId = null;
        }, delay);
    }
}

window.addEventListener('resize', throttleFunc(() => {
    if (window.innerWidth > 992) {
        setTimeout(() => {
            accountsList.style.display = 'flex';
            hamburger.style.display = 'none';
        });
        requestAnimationFrame(() => {
            accountsList.style.width = '30%';
            chatSection.style.width = '70%';
        });
    } else {
        setTimeout(() => {
            accountsList.style.display = 'none';
            hamburger.style.display = 'flex';
        });
        if (chatSection.style.display !== 'none' || chatSection.style.display !== '') chatSection.style.width = '100%';
    }
}, 1000));