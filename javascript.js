


 var map;
 var lat = 36.3212565;
 var lng = 59.5404382;


 var flag = false;

function getDistance(start, end){

}

function getDistance2(start, end){
  x1 = start.lat();
  y1 = start.lng();
  x2 = end.lat();
  y2 = end.lng();



  var Distance = Math.sqrt((x1 - x2)**2 + (y1 - y1)**2);

  return Distance;
}



function getDistance(start, end)
{
//find the Distance
var DistanceService = new google.maps.Distancematrixservice();
DistanceService.getDistanceMatrix({
  origin : [start],
  destinations : [end],
  travelmode : google.maps.travelmode.WALKING,
  nuitesystem : google.maps.nuitesystem.METRIC,
  druationintraffic : true,
  avoidHighways : false,
  avoidTolls : false,

},
function (responsive, status){
  if(status !== google.maps.Distancematrixservice.OK) {
console.log(`Error`, status );
  }else {
console.log(Response);
}

  }
)
}


 
 function myMap(position) {
 var mapProp= {
   center:new google.maps.LatLng(lat,lng),
   zoom:15,
   
 };
 var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
 
 if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(function(position){
  
     lat = position.coords.latitude;
     lng = position.coords.longitude;
 
     var myCenter = new google.maps.LatLng(lat , lng);
 map.setCenter(myCenter);
 
     var marker_start = new google.maps.Marker({
   position: myCenter,
   draggable : true ,
 Animation : google.maps.Animation.BOUNCE,
 
 });
 marker_start.setMap(map);

 google.maps.event.addListener(marker_start , 'click' , function(){
 
   var tag_p_lat_start = document.getElementById("lat_start");
   var tag_p_lng_start = document.getElementById("lng_start");
 
 var location_start = marker_start.getPosition();
//  tag_p_lat_start.innerHTML = location_start.lat();
//  tag_p_lng_start.innerHTML = location_start.lng();

 document.getElementById("massage").innerHTML = "بهم بگو قراره بریم کجا"


if(flag == false){
  flag = true;

var marker_end = new google.maps.Marker({
    position : myCenter,
    draggable : true,
    Animation : google.maps.Animation.BOUNCE,
icon : icon.png,
});






marker_end.setMap(map);
google.maps.event.addListener(marker_end , 'click' , function(){


  
  var tag_p_lat_end = document.getElementById("lat_end");
  var tag_p_lng_end = document.getElementById("lng_end");

  var location_end = marker_end.getPosition();
  // tag_p_lat_end.innerHTML = location_end.lat();
  // tag_p_lng_end.innerHTML = location_end.lng();




 Distance = getDistance2(location_start, location_end);

var price = Distance * 2000;

console.log(price);

 let  massage = document.getElementById("massage").innerHTML =  " فهمیدم"+ price + " هزینه سفر"






        });
      }
   });
});

 } else{
   alert("geolocation is not supported by this browser");
 }};