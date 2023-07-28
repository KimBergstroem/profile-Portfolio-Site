function initMap (){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 50.619261,
            lng: 10.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        { lat: 41.401692247902396, lng: 2.1920599450478835 },
        { lat: 37.96683803622392, lng: 23.69536852767224 },
        { lat: 38.75411653521432, lng: -9.189251477323117 },
        { lat: 56.047617196910835, lng: 12.693847111517693 },
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location, 
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, 
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
