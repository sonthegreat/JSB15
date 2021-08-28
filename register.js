
//btvn 1
const SPORT_URL = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
fetch(SPORT_URL)
    .then((response) => response.json())
    .then((data) => console.log(data.results[1].incorrect_answers))
    .catch(function(err){
        console.log(err);
      });


//btvn 2
fetch("https://shazam.p.rapidapi.com/songs/get-details?key=40333609&locale=en-US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "1aa0fd739dmsh80bf956e6ddcafdp1d6fd3jsnf226b7d2aac8"
	}
})
.then((response) => response.json())
.then((data)=>console.log(data))
.catch(err => {
	console.error(err);
});