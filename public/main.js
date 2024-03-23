// Leaflet Map Initialization
function initMap() {
    var map = L.map('store-location-map').setView([40.712776, -74.005974], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([40.712776, -74.005974]).addTo(map);
    marker.bindPopup("<b>Our Location</b><br>Toronto, Ontario, Canada").openPopup();
}

// Slider bt Glide
document.addEventListener('DOMContentLoaded', function () {
    initMap(); 
    new Glide('.glide', {
        type: 'carousel',
        autoplay: 2000,
        hoverpause: true
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    var granimInstance = new Granim({
        element: '#granim-canvas',
        name: 'basic-gradient',
        direction: 'left-right',
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#ff6e7f', '#bfe9ff'],
                    ['#ffbd69', '#ff6363']
                ],
                transitionSpeed: 7000
            }
        }
    });
});
