var main = function(){
    'use strict'
    $('h1').css('color', 'red')
    var i = 1
    for(i; i<=100; i++){
        if( (i%2 === 0) && !(i%3 === 0) && !(i%5 === 0) ){
            console.log(i)
        }else if((i%3 === 0) && (i%5 === 0)){
            console.log('FizzBuzz')
        }else if((i%3 === 0) && !(i%5 === 0)){
            
            console.log('Fizz')
        }else if((i%5 === 0)&& !(i%3 === 0)){
            
            console.log('Buzz')
        }


}
}
$(document).ready(main)