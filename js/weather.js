navigator.geolocation.getCurrentPosition(geook, geoerror);

function geook(event) {
  const lat = event.coords.latitude;
  const long = event.coords.longitude;
  const API_KEY = "b2ff35336779cc01b7c21f313684fca7";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url);
}
function geoerror() {
  alert("위치를 찾을수 없어요");
}
