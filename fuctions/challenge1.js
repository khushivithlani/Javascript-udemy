// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an 
// array with the number of replies for each option. This data is stored in the starter 
// 'poll' object below.


// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the 
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

// 1.2. Based on the input number, update the 'answers' array property. For 
// example, if the option is 3, increase the value at position 3 of the array by 
// 1. Make sure to check if the input is a number and if the number makes 
// sense (e.g. answer 52 wouldn't make sense, right?)

const poll = {
    questions: ' What is your favourite programming language?',
    options : ['0: JavaScript', '1: python', '2: Rust', '3: c++'],
    answers: new Array(4).fill(0),  
    registerNewAnswer(){
    const answer = Number(prompt(`${this.questions} \n ${this.options.join('\n')}\n (write option number)`))
    
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    console.log(answer);

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};



// 2. Call this method whenever the user clicks the "Answer poll" button.
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


// 3. Create a method 'displayResults' which displays the poll results. The 
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using 
// console.log(). This should be the default option. If type is 'string', display a 
// string like "Poll results are 13, 2, 4, 1"

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });




(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
  })();