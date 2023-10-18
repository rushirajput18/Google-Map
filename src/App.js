import React, { useEffect } from 'react';

function App() {
  // Initialize the map and heatmap when the component mounts
  useEffect(() => {
    // Data points defined as an array of LatLng objects
    var heatmapData = [
      new window.google.maps.LatLng(37.782, -122.447),
      new window.google.maps.LatLng(37.782, -122.445),
      new window.google.maps.LatLng(37.782, -122.443),
      new window.google.maps.LatLng(37.782, -122.441),
      new window.google.maps.LatLng(37.782, -122.439),
      new window.google.maps.LatLng(37.782, -122.437),
      new window.google.maps.LatLng(37.782, -122.435),
      new window.google.maps.LatLng(37.785, -122.447),
      new window.google.maps.LatLng(37.785, -122.445),
      new window.google.maps.LatLng(37.785, -122.443),
      new window.google.maps.LatLng(37.785, -122.441),
      new window.google.maps.LatLng(37.785, -122.439),
      new window.google.maps.LatLng(37.785, -122.437),
      new window.google.maps.LatLng(37.785, -122.435),
    ];

    var sanFrancisco = new window.google.maps.LatLng(37.774546, -122.433523);

    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: sanFrancisco,
      zoom: 13,
      mapTypeId: 'satellite',
    });

    var heatmap = new window.google.maps.visualization.HeatmapLayer({
      data: heatmapData,
    });

    heatmap.setMap(map);
  }, []);
  if (window.google) {
    // Your Google Maps code here
  } else {
    // Handle the case when the Google Maps API is not available
    console.error('Google Maps API is not available.');
  }
  
  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}

export default App;
