var service_nav = document.querySelectorAll('.service-nav');
var service_section = document.querySelectorAll('.service-section');

service_nav.forEach((nav, index) => {
    nav.addEventListener('click', function () {
        service_section.forEach(section => section.style.display = 'none'); // Hide all sections
        service_nav.forEach(navItem => navItem.classList.remove('active')); // Remove active class
        
        nav.classList.add('active'); // Add active class to clicked nav item
        service_section[index].style.display = 'flex'; // Show corresponding section
    });
});