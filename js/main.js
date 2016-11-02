$(document).ready(function() {
var secret_word = "hello";


var splitWordAddToView =  function(word){
   for(var letter in secret_word){
      $('#main_play_area').append('<div class="letter_' + secret_word[letter] +' letter_box"></div>' );
   }
}

splitWordAddToView();
var countHits = 0;
var countInnerHits = 0;
var banHits = false;
$('.pickedLetter').click(function (){
   var x = 0;
   var collectionOfScretLetters = $(".letter_box");
   //console.log(collectionOfScretLetters);
//secreteLetter
   for(var y = 0; y < collectionOfScretLetters.length; y++){
     var splitStringClass = collectionOfScretLetters[y].className.split(' ');
        if(splitStringClass[0] === 'letter_' + this.id.toLowerCase()){
           $("."+splitStringClass[0]).html(this.id);
           console.log(splitStringClass[0]);
           banHits = true;
         }
   }
    if(!banHits){
    countHits++;
    switch(countHits){
      case 1:
        $("#head").removeClass("hidden_part");
      break;

      case 2:
          $("#body").removeClass("hidden_part");
      break;

      case 3:
          $("#right_arm").removeClass("hidden_part");
      break;

      case 4:
          $("#left_arm").removeClass("hidden_part");
      break;

      case 5:
          $("#right_leg").removeClass("hidden_part");
      break;

      case 6:
          $("#left_leg").removeClass("hidden_part");
      break;
      case 7:
          alert("Game Over fellow!!!")
      break;
      default:
        countHits = 0;
     }
   }
   banHits=false;

})

});
