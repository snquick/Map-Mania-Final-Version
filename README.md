# final_map_mania
Final version of map mania game!
Once this game starts up, you'll be greeted with a "Getting Started" pop-up that will explain the basics of the game.
From here, you can begin playing the game. By following the hint given, you will need to zoom in to level 6 and be in the region of the location that has to be found. There are hints and a score given after each location is found. 
The map is implemented in the javascript and html files. In the HTML file, there is my own API key made. In the .js file, the map is made in the "initMap()" function. 

I implemented this in my javascript file by first making an array of the all favorite places that needed to be found. 
I made a function called "initMap" so when the map is loaded, the hint and score will be set to a value and then the game will go to the "updateGame" function. 
In this function, I created an if else statement for when the user finds a location it will go to the console and say it is found. 
Lines 52-56: 
if ((zoomLevel >= 7) && (inBounds)) {
        console.log("Ta da! You did it! Time for the next place");
        addMarker(currentPlace); // adds marker of found place
        SetScore(score += 10000) // Adds 10,00 points every time nextplace is called
        nextPlace()
        
After this, the nextPlace function is called. This function is mainly to implement the hints being updated each time
By achieving this, I simply added a long if else statement of each of the hints. 
A few more functions were implemented but that is how I did a majority of this project. 

The cheat code was implemented in the html file also by adding a new function. 
