$(document).ready(function() {
var secret_word = "hello";


var splitWordAddToView =  function(word){
   for(var letter in secret_word){

      $('#main_play_area').append('<div class="letter_box letter_' + secret_word[letter] +'"></div>' );
   }
}

splitWordAddToView();

$('.pickedLetter').click(function (){
var x = 0;
   var collectionOfScretLetters = $(".letter_box");
   console.log(collectionOfScretLetters);

   for(var secreteLetter in collectionOfScretLetters){
     //console.log(++x);
    // console.log(collectionOfScretLetters[secreteLetter].className);
    if(collectionOfScretLetters[secreteLetter].className !== undefined) {
     var splitString = collectionOfScretLetters[secreteLetter].className.split(' ');
   }

       for (var className in splitString){
           if(splitString[className] === 'letter_' + this.id.toLowerCase()){
            console.log(splitString[className]);
           }
       }

   }

})

});
