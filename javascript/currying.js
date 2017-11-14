var greet = function(adjective){
    return function(noun){
        console.log(adjective + ' ' + noun);
    }
};

helloGreet = function(noun){
        console.log(adjective + ' ' + noun);
    };

var helloGreet = greet('hello');

helloGreet('world');

"hello world;"