//Business Logic
var range = 0;
var textList = [];

function numList(number) {
  for (var i = 1; i <= number; i++) {
    range = i;
    textList.push(i);
    console.log(textList);
  }
  return(textList);
}

//User Logic
$(document).ready(function() {
  $("#pong_form").submit(function(event){
    event.preventDefault();
    var startNum = parseInt($("#num_input").val());
    var output = numList(startNum)

    function frontEnd(){
      var nums = "";
      for (var i = 0; i < textList.length; i++) {
        nums += "<li>" + textList[i] + "</li>";
        console.log(nums)
      }
      $("#pong_output").append(nums);
    }
    frontEnd(textList);
  });
});
