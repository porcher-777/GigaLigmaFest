function countdown(){
    var dateCar = new Date("January 13, 2027 19:16:00").getTime();
    var x = setInterval(function() {
        // Get today's date and time
        var maintenant = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = dateCar - maintenant;
        // Time calculations for days, hours, minutes and seconds
        var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
        var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secondes = Math.floor((distance % (1000 * 60)) / 1000);

        //Display at least 2 numbers 

        if(jours < 10)
            jours = "0" + jours;
        if(heures < 10)
            heures = "0" + heures;
        if(minutes < 10)
            minutes = "0" + minutes;
        if(secondes < 10)
            secondes = "0" + secondes;

        // Output the result in an element with id="countdown"
        //document.getElementById("timer").innerHTML = jours + "   " + heures + "      "
        //+ minutes + "       " + secondes; 
        document.getElementById('jour').innerHTML = jours + '</br>';
        document.getElementById('heure').innerHTML = heures + '</br>';
        document.getElementById('min').innerHTML = minutes + '</br>';
        document.getElementById('sec').innerHTML = secondes + '</br>';
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            //document.getElementById("countdown").innerHTML = "C'EST LE JOUR J";
            location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    }, 1000);
}

function Carte(){
    const lat = 39.03106793686061; 
    const lng = 125.77107800300033;
    var ou  = {
        center:new google.maps.LatLng(lat, lng),
        zoom: 15,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
              "saturation": 36
            }, {
              "color": "#ffffff"
            }, {
              "lightness": 40
            }]
          }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#000000"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "on"
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 17
            }, {
              "weight": 1.2
            }]
          }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [{
              "visibility": "simplified"
            }]
          }, {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
              "visibility": "simplified"
            }]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [{
              "visibility": "simplified"
            }]
          }, {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [{
              "visibility": "simplified"
            }, {
              "saturation": "-50"
            }, {
              "lightness": "30"
            }]
          }, {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
              "visibility": "simplified"
            }, {
              "gamma": "0.00"
            }, {
              "lightness": "74"
            }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
              "lightness": "3"
            }]
          }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 21
            }]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
              "visibility": "simplified"
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 29
            }, {
              "weight": 0.2
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 18
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 19
            }]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#000000"
            }, {
              "lightness": 17
            }]
          }]
        };
      var carte = new google.maps.Map(document.getElementById("carte"),ou);
          var marker = new google.maps.Marker({
          // Nous définissons sa position (syntaxe json)
          position: {lat: lat, lng: lng},
          // Nous définissons à quelle carte il est ajouté
          map: carte
      });
}

function verifMail(){
    var email = document.getElementById('email').value;
    if (!email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)){
        alert("Le format de l'adresse e-mail rentrée n'est pas correct ! ");
        document.getElementById('email').style.borderColor = "red";
    }
    if (email == ""){
        alert("Le champs est vide");
        document.getElementById('email').style.borderColor = "red";
    }
}

var i = 0;

function menuApparition(){
  if(i == 0){
    document.getElementById('menu').style.display = "block";
    i = 1;
  }
  else if (i == 1){
    document.getElementById('menu').style.display = "none";
    i = 0;
  }
}

window.onresize = function menuDisparition(){
  if(i == 1 && window.matchMedia("(min-width: 984px)").matches)
    document.getElementById('menu').style.display = "none";
}

/*
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉ 
*/