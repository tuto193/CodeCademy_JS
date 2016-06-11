// Complete lines 3 and 4

var iLoveJavaScript = true;
var iLoveLearning = true;

if( iLoveJavaScript && iLoveLearning ) {
	// if 1 AND 2
	console.log( "Awesome! Let's keep learning!" );
}else if( !( iLoveJavaScript || iLoveLearning ) ) {
	//if NOT 1 OR 2:
	console.log( "Let's see if we can change your mind." );
} else {
	consle.log( "You only like one but not the other? We'll work on it." );
}
