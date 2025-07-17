// Handle URL tab parameter
const params = new URLSearchParams(window.location.search);
var service_nav = document.querySelectorAll('.service-nav');
const tabIndex = parseInt(params.get('tab'));

if (!isNaN(tabIndex) && service_nav[tabIndex]) {
    service_nav[tabIndex].click();
} else {
    service_nav[0].click(); // default to first tab
}