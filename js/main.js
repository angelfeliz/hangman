$(document).ready(function() {
var secret_word = "hello";


var splitWordAddToView =  function(word){  
     for(var letter in secret_word){
        console.log(letter + ' ' + secret_word[letter]);
        $('#main_play_area').append('<div class="letter_box letter_' + letter +' "></div>' );
     }

  }
splitWordAddToView();

});
