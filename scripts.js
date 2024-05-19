document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('.navbar nav ul');
    nav.classList.toggle('show');
});

// Servicerotor 
let currentService = 0;
const services = document.querySelectorAll('.service');
const numServices = services.length;

function rotateServices() {
    services[currentService].classList.remove('active');
    currentService = (currentService + 1) % numServices;
    services[currentService].classList.add('active');
}

setInterval(rotateServices, 3000);
