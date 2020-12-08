//Long string literal

let longString = "This is a statement.\
 This is a statement.\
 This is a statement.\
 This is a statement.";

 let sentence = 'This is chapter introduction';
 let sentenceObject = new String(sentence);

 //string APIs
 //the data is not changes, only for display, one can use the changed value futher(immutable)
 
 console.log(sentence.charAt(10));
 console.log(sentence.charCodeAt(10));
 console.log(sentence.concat('10'));
 console.log(sentence.startsWith('This'));
 console.log(sentence.endsWith('This'));
 console.log(sentence.includes('The'));
 console.log(sentence.indexOf('t')); //first occurance only
 console.log(sentence.lastIndexOf('t'));
 console.log(sentence.concat('10'));
 console.log(sentence.repeat(5)); //Repeat sentence 5 times
 console.log(sentence.replace('s', 'YO!!')); //Replaces only first occurance
 
 console.log(sentence.toUpperCase());
 console.log(sentence.toLowerCase());
 console.log(sentence.toLocaleLowerCase()); //can be used in case of date as the way it is written may varry
 
 console.log(sentence.split(' '));

 //pulls values based on provided indexes from start to end
 console.log(sentence.substr(0, 5));
 console.log(sentence.substring(0, 5));
 console.log(sentence.slice(0, 5));













