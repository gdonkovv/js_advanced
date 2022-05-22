function wordsUppercase(input) {

    let pattern = /\w+/g;
    let match = input.match(pattern);

    let upper = match.map(x => x.toUpperCase())
    
    console.log(upper.join(", "));

}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');