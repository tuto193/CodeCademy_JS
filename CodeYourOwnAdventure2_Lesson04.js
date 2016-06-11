var user = prompt( "You wake up in the middle of the night and hear some sound \
		comming from the kitchen. What do you do?" ).toUpperCase();

switch (user) {
	case 'SLEEP':
		console.log( "You carry on sleeping. You die in your sleep..." );
		break;
	case 'GO CHECK':
		console.log( "Something seems to be happening in the kitchen." );
		break;
	case 'MAKE A CALL':
		console.log( "You pick up your Cellphone and dial to... ?" );
		break;
	default:
		console.log( "That is not an option!" );
		break;
};
