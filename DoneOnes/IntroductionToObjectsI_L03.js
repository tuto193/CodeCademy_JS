/* We are going to Play Fizz Buzz. X%3 = Fizz; X%5 = Buzz... */

var here = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ];

var FizzBuzz = function( numbers ){
    for( each in numbers ){
        if( numbers[each] % 15 === 0 ){
            console.log( "FizzBuzz" );
        }else if( numbers[each] % 5 === 0 ){
            console.log( "Buzz" );
        }else if( numbers[each] % 3 === 0 ){
            console.log( "Fizz" );
        }else{
            console.log( numbers[each] );
        }
    }
}

FizzBuzz( here );
