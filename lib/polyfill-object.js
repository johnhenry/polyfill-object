/*!
 * Polyfill for Objects
 * Copyright(c) 2013 John Henry
 * MIT Licensed
 * Inspired By: http://javascript.crockford.com/remedial.html
 *      
 */

 
(function(global){
////////////
//Setup
////////////
    var OBJ = global.Object;//The constructor object


////////////
//Static Functions
////////////

    //TypeOf -- Returns the proper type of a given object as an array as an alternative to the "typeof" keyword
    //Arguments
        //object:* -- Object who's type is to be tested
    //Returns :string{"object"|"array"|"function"|"number"|"boolean"|"null"|"undefined"|"string"}
    //Example
        //Console.log(Object.TypeOf(null)); //#null
    var typeOf = OBJ.TypeOf = OBJ.TypeOf || function(object) {
        var s = typeof object;
        return (s !== 'object')? s : (!object)? 'null' : (Object.prototype.toString.call(object) === '[object Array]')? 'array' : s;
    };

    //isEmpty -- Returns true if given object contains no members
    //Arguments
        //object:* -- Object who's emptiness is to be tested
    //Example
        //Console.log(Object.IsEmpty(null)); //#true
        //Console.log(Object.IsEmpty({a:"a"})); //#false
    var isEmpty = OBJ.IsEmpty = OBJ.IsEmpty || function(object) {
        if (typeOf(object) !== 'object') return true;
        for (var i in object) if (object[i] !== undefined && typeOf(object[i]) !== 'function') return false;
        return true;
    };


})(typeof global === 'undefined'? window: global)