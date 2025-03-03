mapboxgl.accessToken =mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [73.1812, 22.3072], // starting position [lng, lat]
    zoom: 9, // starting zoom
});



