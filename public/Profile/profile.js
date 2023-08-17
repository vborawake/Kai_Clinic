const editSection = document.getElementById('edit_section');
const inputSection = document.getElementById('input_section');
const breadCrumb = document.querySelector('.edit');

function showEditScreen(e, action) {
    if (action === 'show') {
        // Hide right section and show 2nd version of right section
        editSection.children[0].style.display = 'none';
        editSection.children[1].style.display = 'none';
        editSection.children[2].style.display = 'flex';
        // Show Change Password Button
        inputSection.querySelector('button').style.display = 'block';
        // Hide heading
        breadCrumb.previousElementSibling.style.display = 'none';
        // Show Breadcrumb
        breadCrumb.style.display = 'block';
        breadCrumb.nextElementSibling.style.display = 'block';
    } else if (action === 'hide') {
        // Show original right section
        editSection.children[0].style.display = 'flex';
        editSection.children[1].style.display = 'block';
        editSection.children[2].style.display = 'none';
        editSection.style.display = 'flex';
        // Hide change password button
        inputSection.querySelector('button').style.display = 'none';
        // Show heading
        breadCrumb.previousElementSibling.style.display = 'flex';
        breadCrumb.previousElementSibling.innerHTML = 'Profile';
        // Hide breadcrumb
        breadCrumb.style.display = 'none';
        breadCrumb.nextElementSibling.style.display = 'none';
        // Hide password inputs
        inputSection.nextElementSibling.style.display = 'none';
        // Show original left section
        inputSection.style.display = 'flex';
    } else if (action === 'password') {
        inputSection.style.display = 'none';
        inputSection.nextElementSibling.style.display = 'flex';
        breadCrumb.previousElementSibling.innerHTML = 'Change Password';
        breadCrumb.previousElementSibling.style.display = 'flex';
        breadCrumb.style.display = 'none';
        editSection.style.display = 'none';
        inputSection.nextElementSibling.querySelector('button').style.display = 'block';
        inputSection.parentElement.previousElementSibling.querySelector('button').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('password') === 'true') {
        showEditScreen(null, 'password');
        localStorage.removeItem('password');
    }
});

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});