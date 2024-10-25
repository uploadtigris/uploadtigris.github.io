document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const socialLinks = document.querySelector('.social-links');

    menuToggle.addEventListener('click', function () {
        socialLinks.style.display = socialLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});
