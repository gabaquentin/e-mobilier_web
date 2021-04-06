function singleMap() {
    var svg = '<svg id="fi_4442770" enable-background="new 0 0 511.967 511.967" height="50" viewBox="0 0 511.967 511.967" width="50" xmlns="http://www.w3.org/2000/svg"><g><path clip-rule="evenodd" d="m255.983 332.154c74.949 0 136.078-61.129 136.078-136.077-7.687-180.539-264.496-180.485-272.156.001 0 74.947 61.129 136.076 136.078 136.076z" fill="#e2c4ff" fill-rule="evenodd"/><g fill="#020288"><path d="m255.983 0c-108.118 0-196.078 87.96-196.078 196.077 0 98.497 103.474 215.906 171.944 293.599 5.868 6.659 11.412 12.949 16.595 18.895 3.768 4.529 11.308 4.528 15.076 0 72.756-83.595 187.264-204.826 188.541-312.493 0-108.118-87.96-196.078-196.078-196.078zm9.125 476.455c-3.136 3.558-6.178 7.011-9.126 10.365-2.948-3.355-5.992-6.81-9.129-10.368-66.48-75.434-166.948-189.432-166.948-280.375 0-97.089 78.989-176.077 176.078-176.077 97.09 0 176.078 78.988 176.078 176.077 0 90.944-100.47 204.943-166.953 280.378z"/><path d="m335.873 170.252c-1.717-26.026-23.437-46.675-49.889-46.675h-60.001c-26.454 0-48.174 20.65-49.89 46.675-26.599 9.375-26.655 47.144-.11 56.611v11.714c0 16.542 13.458 30 30 30h100.001c16.542 0 29.999-13.458 29.999-30v-11.714c26.562-9.476 26.472-47.247-.11-56.611zm-109.89-26.675h60.001c14.838 0 27.195 10.83 29.582 25h-119.167c2.387-14.17 14.744-25 29.584-25zm80 105h-100c-5.514 0-10-4.486-10-10v-10h120v10c0 5.514-4.486 10-10 10zm20-40h-140c-13.271-.551-13.261-19.454 0-20h140c13.269.551 13.259 19.454 0 20z"/></g></g></svg>';

    var markerIcon = {
        url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(svg),
    };
    var myLatLng = {
        lng: $('#singleMap').data('longitude'),
        lat: $('#singleMap').data('latitude'),
    };
    var single_map = new google.maps.Map(document.getElementById('singleMap'), {
        zoom: 5,
        center: myLatLng,
        scrollwheel: false,
        zoomControl: false,
        fullscreenControl: true,
        mapTypeControl: false,
        scaleControl: false,
        panControl: false,
        navigationControl: false,
        streetViewControl: true,
        styles: [{
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }]
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: single_map,
        icon: markerIcon,
		draggable: true,
        title: 'Your location'
    });
               google.maps.event.addListener(marker, 'dragend', function (event) {
                  document.getElementById("lat").value = event.latLng.lat();
                  document.getElementById("long").value = event.latLng.lng();
              });	
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, single_map);
    function ZoomControl(controlDiv, single_map) {
        zoomControlDiv.index = 1;
        single_map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
        controlDiv.style.padding = '5px';
        var controlWrapper = document.createElement('div');
        controlDiv.appendChild(controlWrapper);
        var zoomInButton = document.createElement('div');
        zoomInButton.className = "mapzoom-in";
        controlWrapper.appendChild(zoomInButton);
        var zoomOutButton = document.createElement('div');
        zoomOutButton.className = "mapzoom-out";
        controlWrapper.appendChild(zoomOutButton);
        google.maps.event.addDomListener(zoomInButton, 'click', function () {
            single_map.setZoom(single_map.getZoom() + 1);
        });
        google.maps.event.addDomListener(zoomOutButton, 'click', function () {
            single_map.setZoom(single_map.getZoom() - 1);
        });
    }

    // Geo Location Button
    $(".geoLocation, .input-with-icon.location a").on("click", function (e) {
        e.preventDefault();
        geolocate();
    });

    function geolocate() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                document.getElementById("lat").value = position.coords.latitude;
                document.getElementById("long").value = position.coords.latitude;
                single_map.setCenter(pos);
                single_map.setZoom(12);

                var avrtimg = $(".avatar-img").attr("data-srcav");
                var markerIcon3 = {
                    url: avrtimg,
                };
                marker = new google.maps.Marker({
                    position: pos,
                    map: single_map,
                    icon: markerIcon,
                    draggable: true,
                    title: 'Your location'
                });
                var myoverlay = new google.maps.OverlayView();
                myoverlay.draw = function () {
                    // add an id to the layer that includes all the markers so you can use it in CSS
                    this.getPanes().markerLayer.id='markerLayer';
                };
                myoverlay.setMap(map);

            });
        }
    }

}
singleMap();