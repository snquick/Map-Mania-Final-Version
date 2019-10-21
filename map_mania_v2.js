//  favorite places variables
var favoritePlaces = [
    {content:'<strong>#1: Chicago, IL <strong>', coordinates:{lat:41.878113,lng:-87.629799}, iconImagePath:"flag.png"},
    {content:'<strong>#2: Liverpool, England <strong>', coordinates:{lat:53.408371,lng:-2.9911573}, iconImagePath:"flag.png"},
    {content:'#3. Amsterdam, England', coordinates:{lat:52.370216,lng:4.895168}, iconImagePath:"flag.png"},
    {content:'#4. Cartagena, Colombia', coordinates:{lat:10.422930,lng:-75.537262}, iconImagePath:"flag.png"},
    {content:'#5. Paris, France', coordinates:{lat:48.856613,lng:2.352222}, iconImagePath:"flag.png"},
    {content:'#6. London, England', coordinates:{lat:51.507351,lng:-0.127758}, iconImagePath:"flag.png"},
    {content:'#7. Orlando, Florida', coordinates:{lat:28.538330,lng:-81.378883}, iconImagePath:"flag.png"},
    {content:'#8. Cancun, Mexico', coordinates:{lat:21.161907,lng:-86.851524}, iconImagePath:"flag.png"},
    {content:'#9. Romeoville, IL', coordinates:{lat:41.647812,lng:-88.087128}, iconImagePath:"flag.png"},
    {content:'#10. Chattanooga, Tennessee', coordinates:{lat:35.045761,lng:-85.308289}, iconImagePath:"flag.png"}
]


// when app starts up, prints this on console..
function initApplication() {
    console.log('Starting up...');
    window.alert("Getting started: Time to play the Map Game! All you have to do is move around the map with your cursor until you find my favorite places. There will be hints and you'll gain points every time you find a place! Good luck! Remember to have your zoom level at 5 or more! (pstt... maybe try double checking my name...");

}

// Initializing variables
var currentPlaceIndex = favoritePlaces.length-1;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 0;
var zoomLevel = 0;
var hint = "";

function initMap() {
    // where map begins on start up
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
        "center": {"lat": 41.878, "lng": 10}, "zoom": 3});
    google.maps.event.addListener(gMap, 'idle', function() { updateGame()});
    //SetHint("Somewhere that feels like home!");
    SetScore(score); // sets score to score
    SetHint("Nothing like some Southern comfort food."); // hint on loadup   
}

function updateGame() {
    var inBounds = false;
    zoomLevel = gMap.getZoom();

    // prints zoom level in the console 
    console.log("Zoom Level:" + zoomLevel);

    if (gMap.getBounds().contains(currentPlace.coordinates)) {
        var inBounds = true;
        console.log("Inbounds");
    }
    // If zoom level is equal to or greater than six AND inbounds, this will happen
    if ((zoomLevel >= 6) && (inBounds)) {
        console.log("Ta da! You did it! Time for the next place");
        addMarker(currentPlace); // adds marker of found place
        SetScore(score += 10000) // Adds 10,00 points every time nextplace is called
        nextPlace();
    }
}
function nextPlace() {
    currentPlaceIndex--;
    currentPlace = favoritePlaces[currentPlaceIndex];

    // If statement to display the hints at the right time
    if (currentPlace == favoritePlaces[8]) {
        SetHint("Take me home... Country roads!")
    }
    else if (currentPlace == favoritePlaces[7]) {
        SetHint("Más margaritas por favor!")
    }
    else if (currentPlace == favoritePlaces[6]) {
        SetHint("Home of the crazy and alligators")
    }
    else if (currentPlace == favoritePlaces[5]) {
        SetHint("Tea time :)")
    }
    else if (currentPlace == favoritePlaces[4]) {
        SetHint("Love, crepes, and berets.")
    }
    else if (currentPlace == favoritePlaces[3]) {
        SetHint("Empanadas and Spanish music. Don't forget the bug spray!")
    }
    else if (currentPlace == favoritePlaces[2]) {
        SetHint("Canals, tulips, AJAX, and stroopwafels!")
    }
    else if (currentPlace == favoritePlaces[1]) {
        SetHint("The Beatles...")
    }
    else if (currentPlace == favoritePlaces[0]) {
        SetHint("Deep dish pizza with a side of road rage.")
    }
    else if (currentPlace == favoritePlaces[-1]) {
        window.alert("Winner!! Congratulations!");
    }
}
// Add marker funciton - will add marker once location is found 
function addMarker(markerContent) {
    // initializing marker variable
    var marker = new google.maps.Marker({position:markerContent.coordinates, map:gMap});
    if (markerContent.iconImagePath) {
        marker.setIcon(markerContent.iconImagePath);
    }

    if (markerContent.content) {
        var infoWindow = new google.maps.InfoWindow({"content":markerContent.content});
        marker.addListener("click", function() { infoWindow.open(gMap, marker) });
    }
}

// Set hint function
function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}

// Set score function
function SetScore(score) {
    document.getElementById("score-id").value = score; 
}

