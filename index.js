function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function namedFunction(){
        return "I'm named!";
    }
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return function(){
        return "I'm anonymous!";
    };
}
