
//----define moment varibles used to show time----//
var date = moment().format("MMM Do YYYY");
// var currentTime = moment().format('H');
// console.log(currentTime);

//-------append date----------//
$("#currentDay").append(date);


//---------background Updater------------------------//

var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

udpateTime();

function udpateTime() {
  var currentTime = moment().format('H');
  console.log(currentTime)
  for(var i = 0; i < timeOfDay.length; i++) {

    if (parseInt(timeOfDay[i]) > currentTime) {
      $("#" + timeOfDay[i]).attr("style", "background-color: #77dd77");
        // $("#" + timeOfDay[i]).addClass(".future");

    }
    else if (parseInt(timeOfDay[i]) < currentTime) {
      $("#" + timeOfDay[i]).attr("style", "background-color: #d3d3d3");

    }
    else if (parseInt(timeOfDay[i]) == currentTime) {
      $("#" + timeOfDay[i]).attr("style", "background-color: #ff6961");
    
    }
  }
}

//-------Getting individual childern and setting to parent-----//
$("#9am").children("input").val(localStorage.getItem("9am"));

$("#10am").children("input").val(localStorage.getItem("10am"));

$("#11am").children("input").val(localStorage.getItem("11am"));

$("#12pm").children("input").val(localStorage.getItem("12pm"));

$("#1pm").children("input").val(localStorage.getItem("1pm"));

$("#2pm").children("input").val(localStorage.getItem("2pm"));

$("#3pm").children("input").val(localStorage.getItem("3pm"));

$("#4pm").children("input").val(localStorage.getItem("4pm"));

$("#5pm").children("input").val(localStorage.getItem("5pm"));

//--onclick event to save user input to local storage---//
$(".saveBtn").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
 
  var textContent = $(this).parent().children().siblings("input").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

