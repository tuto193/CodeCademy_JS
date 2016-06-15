var user = prompt( "You wake up in the middle of the night and hear some sound comming from the kitchen. What do you do?" ).toUpperCase();

var tired = true;
var mom = false;
var police = true;
var monster = true;

switch (user) {
	case 'SLEEP':
		var sleep = promp( "Are you tired?" ).toUpperCase();
        if( tired==="YES" && monster ){
            console.log( "You died in your sleep. :(" )
        }else{
            console.log( "Your indecision has killed you." )
        }
		break;
	case 'GO CHECK':
		console.log( "Something seems to be happening in the kitchen." );
		break;
	case 'MAKE A CALL':
		var makingCall = promot( "You pick up your Cellphone and dial to... ?" ).toLowerCase();
        if( makingCall === "mom" || "police" && mom || police ){
            console.log( "You call to" + makingCall )
        }else{
            console.log( "The phoneline seems busy... good luck now." )
        }
		break;
	default:
		console.log( "That is not an option!" );
		break;
};
