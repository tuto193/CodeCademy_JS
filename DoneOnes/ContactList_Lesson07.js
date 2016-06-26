/* We start with the lesson 2 */

var friends = {
    bill : {
        firstName : "Bill",
        lastName : "Gates",
        number: "123ABCBBYUNME",
        address : [ "Graupenstr.", "1A", "38678" ]
    },
    steve : {
        firstName : "Steve",
        lastName : "Jobs",
        number : "1B3DNOTMEBBY",
        address : [ "Bournemouth", "NoMoreUK", "BH1 2NA" ]
    }
};

var list = function ( obj ) {
    for( var Foo in obj) {
        console.log( Foo );
    }
}

var search = function( name ) {
    for( var Poop in friends ) {
        if( friends[ Poop ].firstName === name ) {
            console.log( friends[ Poop ] );
            return friends[ Poop ];
        }
    }
}
