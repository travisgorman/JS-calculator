var numKeys = document.querySelectorAll('.numbers button');
var opKeys = document.querySelectorAll('.operators button');
var display = document.getElementById('answer');
var clKey = document.querySelector('.clear');
var eqKey = document.querySelector('.equals');
var firstNumber;
var operator;

// add an event listener to all number keys
// store the first number in a variable `newNumber`
// store the contents of the display as a variable `oldNumber`
// until the number becomes too big, concatenate the old and new numbers
//

// numbers.forEach(function(number){
//   number.addEventListener('click', function(evt){
//     var newNumber = evt.target.innerHTML;
//     var oldNumber = document.getElementById('answer').innerHTML;
//     if(answer.innerHTML.length < 7) {
//       document.getElementById('answer').innerHTML = oldNumber + newNumber;
//     } else {
//       alert('keep it under ten million, will ya?');
//     }
//   });
// });

for (var i = 0; i < numKeys.length; i++) {
  numKeys[i].addEventListener('click', function(e) {
    // debugger;
    var newNumber = e.target.innerHTML;
    var oldNumber = document.getElementById('answer').innerHTML;
    if ( display.innerHTML.length < 7) {
      document.getElementById( 'answer' ).innerHTML = oldNumber+newNumber;
    } else {
      alert('keep it under ten million, will ya?');
    }
  });
}
// add an event listener to the operator keys
// store the contents of the display area to a variable, `firstNumber`
// set the `operator` variable to one of the four operators
// clear the display by setting it back to an empty string

// operators.forEach( function( operator ){
//   operator.addEventListener( 'click', function( evt ){
//     firstNumber = answer.innerHTML;
//     operator = evt.target.innerHTML;
//     answer.innerHTML = '';
//   });
// });


for (var i = 0; i < opKeys.length; i++) {
  opKeys[i].addEventListener('click', function(e) {
    // debugger;
    firstNumber = display.innerHTML;
    operator = e.target.innerHTML;
    display.innerHTML = '';
  });
}

// add an event listener to the clear key that sets the 
// display back to an empty string

clKey.addEventListener( 'click', function() {
  display.innerHTML = '';
});

// add an event listener to the equals key that
// performs the appropriate operation upon  
// firstNumber, and the second number, which is being held in the display area

eqKey.addEventListener( 'click', function() {
  var answer;
  if (operator === '+') {
    answer = Number( firstNumber ) + Number(display.innerHTML);
  } else if ( operator === '-' ) {
    answer = Number( firstNumber ) - Number(display.innerHTML);
  } else if ( operator === 'x' ) {
    answer = Number( firstNumber ) * Number(display.innerHTML);
  } else {
    answer = Number( firstNumber) / Number(display.innerHTML);
  }
  if (answer > 9999999) {
    display.innerHTML = 'too big';
  } else {
    display.innerHTML = String(answer).slice(0, 7);
  }
});
