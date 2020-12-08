let m1 = "size of the image is 123 x 456";
let regexNumber = /\d+/g;
let matches = m1.match(regexNumber);
console.log(matches);

let email = "hasa@zyc.com";
let numbers = email.match(regexNumber);
console.log(numbers);

let regexEmail = /[a-z]+\w*@[a-z]+.com|net/g;
let correctEmails = emails.match(regexEmail);
console.log(correctEmails);


