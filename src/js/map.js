export default class Map{
}

var map;
function initMap () {
  var mapOptions = {
    center: { lat: -11.852112, lng: -55.504995 },
    zoom: 13
  },

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var myLatlng = { lat: -11.852112, lng: -55.504995 }
    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });

  <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-KBnKJ5gIxoKKkFYiDDm3vTp31N1XQ40&callback=initMap&libraries=geometry,drawing">
    </script>
  // To add the marker to the map, call setMap();
  marker.setMap(map);

}

