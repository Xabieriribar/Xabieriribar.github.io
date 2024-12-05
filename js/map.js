document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el mapa centrado en Europa
    const map = L.map('map').setView([47.5, 8], 5);

    // Añadir capa de mapa base con estilo personalizado
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Icono personalizado para los marcadores
    const customIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Función para crear el contenido del popup
    function createPopupContent(title, type, description) {
        return `
            <div class="popup-content">
                <h3>${title}</h3>
                <p><strong>${type}</strong></p>
                <p>${description}</p>
            </div>
        `;
    }

    // Obtener todas las tarjetas de ubicación
    const locationCards = document.querySelectorAll('.location-card');
    const markers = {};

    // Crear marcadores para cada ubicación
    locationCards.forEach(card => {
        const coordinates = card.dataset.coordinates.split(',').map(coord => parseFloat(coord.trim()));
        const title = card.querySelector('h3').textContent;
        const type = card.querySelector('.location-type').textContent;
        const description = card.querySelector('.location-description').textContent;

        // Crear marcador
        const marker = L.marker(coordinates, {icon: customIcon})
            .addTo(map)
            .bindPopup(createPopupContent(title, type, description));

        // Almacenar el marcador
        markers[title] = marker;

        // Añadir evento click a la tarjeta
        card.addEventListener('click', () => {
            // Remover clase activa de todas las tarjetas
            locationCards.forEach(c => c.classList.remove('active'));
            // Añadir clase activa a la tarjeta clickeada
            card.classList.add('active');
            // Centrar el mapa en el marcador
            map.setView(coordinates, 12);
            // Abrir el popup
            marker.openPopup();
        });

        // Añadir eventos al marcador
        marker.on('click', () => {
            locationCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    // Función para ajustar el mapa a todos los marcadores
    function fitAllMarkers() {
        const group = new L.featureGroup(Object.values(markers));
        map.fitBounds(group.getBounds().pad(0.1));
    }

    // Ajustar el mapa a todos los marcadores al cargar
    fitAllMarkers();

    // Añadir botón para ver todos los marcadores
    const resetButton = L.control({position: 'topleft'});
    resetButton.onAdd = function(map) {
        const btn = L.DomUtil.create('button', 'reset-view-btn');
        btn.innerHTML = '<i class="fas fa-globe"></i>';
        btn.title = 'Ver todos los lugares';
        btn.onclick = function() {
            fitAllMarkers();
            locationCards.forEach(c => c.classList.remove('active'));
        }
        return btn;
    };
    resetButton.addTo(map);
}); 