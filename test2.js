// Ubahlah sebuah kalimat menjadi huruf besar pada setiap kata yang diberikan pada function capitalize_word

function capitalize_word(sentence) {
  // code here
  const arr = sentence.split(" ");
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const sentence2 = arr.join(" ");
  return sentence2;
}

console.log(capitalize_word("john doe"));
console.log(capitalize_word("tic tac toe"));
console.log(capitalize_word("front end engineer"));

// expected output:
// console.log(capitalize_word('john doe')) => 'John Doe'
// console.log(capitalize_word('tic tac toe')) => 'Tic Tac Toe'
// console.log(capitalize_word('front end engineer')) => 'Front End Engineer'
